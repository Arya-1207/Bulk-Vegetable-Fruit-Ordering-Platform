import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
  const id = req.url.split("/").pop();
  const order = await prisma.order.findUnique({
    where: { id: Number(id) },
  });
  return new Response(JSON.stringify(order), { status: 200 });
}

export async function PUT(req: Request) {
  const id = req.url.split("/").pop();
  const { status } = await req.json();
  const updatedOrder = await prisma.order.update({
    where: { id: Number(id) },
    data: { status },
  });
  return new Response(JSON.stringify(updatedOrder), { status: 200 });
}
