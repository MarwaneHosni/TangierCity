import prisma from '../../prisma/prisma.js';

export async function getHotels(req, res, next) {
  try {
    const hotels = await prisma.hotel.findMany();
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching hotels' });
  }
}

export async function getHotelById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const hotel = await prisma.hotel.findUnique({ where: { id } });
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching hotel' });
  }
}

export async function createHotel(req, res) {
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
    const hotel = await prisma.hotel.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        pricePerNight: Number(pricePerNight),
        checkInTime: new Date(checkInTime),
        checkOutTime: new Date(checkOutTime),
        category,
      },
    });
    res.status(201).json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating hotel' });
  }
}

export async function updateHotel(req, res) {
  try {
    const id = Number(req.params.id);
    const hotel = await prisma.hotel.update({
      where: { id },
      data: req.body,
    });
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating hotel' });
  }
}

export async function deleteHotel(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.hotel.delete({ where: { id } });
    res.json({ message: 'Hotel deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting hotel' });
  }
}

export async function searchHotels(req, res) {
  try {
    const { location, category } = req.query;
    const hotels = await prisma.hotel.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching hotels' });
  }
}
