import dotenv from 'dotenv';
dotenv.config();

async function testWebhook() {
  const secret = process.env.REVALIDATION_SECRET || 'my-super-secret-token';
  const webhookUrl = `http://localhost:3001/api/revalidate?secret=${secret}`;

  console.log(`Sending mock Sanity payload to: ${webhookUrl}`);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        slug: 'mock-test-blog-post',
        category: 'blog'
      })
    });

    const data = await response.json();
    console.log('--- NEXT.JS RESPONSE ---');
    console.log(response.status, data);

  } catch (error) {
    console.error('Failed to hit local webhook. Is your Next.js server running on port 3000?', error.message);
  }
}

testWebhook();
