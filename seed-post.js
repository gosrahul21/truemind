const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const post = await prisma.post.create({
    data: {
      domainName: "example.com",
      slug: "sample-post",
      title: "My First Sample Post",
      content: "<p>This is a beautifully formatted sample post! It was dynamically inserted into your database.</p>",
      authorName: "Antigravity",
      coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      tags: ["technology", "nextjs", "prisma"]
    }
  });
  console.log("Created post:", post);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
