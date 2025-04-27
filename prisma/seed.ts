import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Products
  await prisma.product.createMany({
    data: [
      { name: 'Tomatoes', price: 2.5 },
      { name: 'Potatoes', price: 1.8 },
      { name: 'Carrots', price: 2.0 },
      { name: 'Cucumbers', price: 2.2 },
      { name: 'Spinach', price: 3.0 },
      { name: 'Broccoli', price: 3.5 },
      { name: 'Cauliflower', price: 3.0 },
      { name: 'Mangoes', price: 5.5 },
      { name: 'Apples', price: 4.0 },
      { name: 'Bananas', price: 1.5 },
      { name: 'Oranges', price: 3.2 },
      { name: 'Strawberries', price: 6.0 },
      { name: 'Blueberries', price: 7.5 },
      { name: 'Grapes', price: 4.5 },
      { name: 'Pineapples', price: 5.0 },
      { name: 'Onions', price: 2.0 },
      { name: 'Garlic', price: 3.5 },
      { name: 'Ginger', price: 4.2 },
      { name: 'Peas', price: 2.8 },
      { name: 'Sweet Corn', price: 3.1 },
    ],
  })

  console.log('🌱 Seeded products!')

  // Optional: Seed a few orders (sample orders)
  await prisma.order.createMany({
    data: [
      {
        productId: 1, // Tomatoes
        quantity: 5,
        deliveryName: 'Arya Sharma',
        deliveryPhone: '9876543210',
        deliveryAddr: '123 Street, Pune',
        status: 'Pending',
      },
      {
        productId: 8, // Mangoes
        quantity: 2,
        deliveryName: 'Riya Kapoor',
        deliveryPhone: '8765432109',
        deliveryAddr: '456 Avenue, Mumbai',
        status: 'In Progress',
      },
      {
        productId: 15, // Pineapples
        quantity: 1,
        deliveryName: 'Rahul Singh',
        deliveryPhone: '7654321098',
        deliveryAddr: '789 Lane, Delhi',
        status: 'Delivered',
      },
    ],
  })

  console.log('📦 Seeded orders!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
