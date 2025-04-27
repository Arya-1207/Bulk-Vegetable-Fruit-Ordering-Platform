import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const newOrder = await prisma.order.create({
    data: body,
  });
  return new Response(JSON.stringify(newOrder), { status: 201 });
}
