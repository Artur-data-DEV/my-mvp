import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { name, email } = await request.json();
  const user = await prisma.user.create({
    data: { name, email },
  });
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}
