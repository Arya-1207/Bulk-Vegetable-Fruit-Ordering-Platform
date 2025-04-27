import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
  const orders = await prisma.order.findMany();
  return new Response(JSON.stringify(orders), { status: 200 });
}
