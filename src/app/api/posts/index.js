import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { title, content, userId } = await request.json();
  const post = await prisma.post.create({
    data: { title, content, userId },
  });
  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}
