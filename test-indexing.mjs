import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

async function testGoogleIndexing() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const domainName = process.env.DOMAIN_NAME || 'truemindlabs.com'; // Change this to your actual domain if DOMAIN_NAME is not set in .env

  if (!clientEmail || !privateKey) {
    console.error('❌ Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY in .env file.');
    return;
  }

  console.log('Testing Google Indexing API credentials...');
  
  try {
    const jwtClient = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/indexing'],
      undefined
    );
    
    await jwtClient.authorize();
    console.log('✅ Successfully authenticated with Google!');

    const baseUrl = domainName.startsWith('http') ? domainName : `https://${domainName}`;
    const urlToTest = `${baseUrl}/`; // Testing with the homepage

    console.log(`Pinging Google to index: ${urlToTest}`);

    const response = await google.indexing('v3').urlNotifications.publish({
      auth: jwtClient,
      requestBody: {
        url: urlToTest,
        type: 'URL_UPDATED',
      },
    });

    console.log('✅ Google API Response:');
    console.log(response.data);
    console.log('\nSuccess! Your API keys and configuration are working perfectly.');
    
  } catch (error) {
    console.error('❌ Failed to ping Google Indexing API:');
    if (error.response && error.response.data) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

testGoogleIndexing();
