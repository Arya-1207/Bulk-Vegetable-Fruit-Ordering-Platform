import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Map form fields to schema fields if they don't match
    const orderData = {
      productId: body.productId || 1, // Default to first product if not specified
      quantity: body.quantity || 1,
      deliveryName: body.buyerName || body.deliveryName,
      deliveryPhone: body.contact || body.deliveryPhone,
      deliveryAddr: body.address || body.deliveryAddr,
      status: "Pending"
    };
    
    const newOrder = await prisma.order.create({
      data: orderData,
    });
    
    return new Response(JSON.stringify(newOrder), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response(JSON.stringify({ error: "Failed to create order" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
