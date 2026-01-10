import prisma from '../../prisma/prisma.js';

export async function getRestaurants(req, res, next) {
  try {
    const restaurants = await prisma.restaurant.findMany();
    res.json(restaurants);
  } catch {
    console.error(error);
    res.status(500).json({ message: 'Error fetching restaurants' });
  }
}

export async function getRestaurantById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const restaurant = await prisma.restaurant.findUnique({ where: { id } });
    if (!restaurant)
      return res.status(404).json({ message: 'restaurant not found' });
    res.json(restaurant);
  } catch {
    console.error(error);
    res.status(500).json({ message: 'Error fetching restaurant' });
  }
}

export async function createRestaurant(req, res) {
  try {
    const {
      name,
      description,
      image,
      location,
      rating,
      pricePerNight,
      checkInTime,
      checkOutTime,
      category,
    } = req.body;
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        pricePerNight: Number(pricePerNight),
        openTime: Date.parse(checkInTime),
        closeTime: Date.parse(checkOutTime),
        category,
      },
    });
    res.status(201).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating restaurant' });
  }
}

export async function updateRestaurant(req, res) {
  try {
    const id = Number(req.params.id);
    const restaurant = await prisma.restaurant.update({
      where: { id },
      data: req.body,
    });
    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating restaurant' });
  }
}

export async function deleteRestaurant(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.restaurant.delete({ where: { id } });
    res.json({ message: 'restaurant deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting restaurant' });
  }
}

export async function searchRestaurants(req, res) {
  try {
    const { location, category } = req.query;
    const restaurants = await prisma.restaurant.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching restaurants' });
  }
}
