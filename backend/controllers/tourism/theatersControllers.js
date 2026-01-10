import prisma from '../../prisma/prisma.js';

export async function getTheaters(req, res, next) {
  try {
    const theaters = await prisma.theater.findMany();
    res.json(theaters);
  } catch (err) {
    next(err);
  }
}

export async function getTheaterById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const theater = await prisma.theater.findUnique({ where: { id } });

    if (!theater) {
      return res.status(404).json({ message: 'theater not found' });
    }

    res.json(theater);
  } catch (err) {
    next(err);
  }
}

export async function createTheater(req, res, next) {
  try {
    const {
      name,
      description,
      image,
      location,
      rating,
      pricePerNight,
      openTime,
      closeTime,
      category,
    } = req.body;

    const theater = await prisma.theater.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        pricePerNight: Number(pricePerNight),
        openTime: Date.parse(openTime),
        closeTime: Date.parse(closeTime),
        category,
      },
    });

    res.status(201).json(theater);
  } catch (err) {
    next(err);
  }
}

export async function updateTheater(req, res, next) {
  try {
    const id = Number(req.params.id);

    const theater = await prisma.theater.update({
      where: { id },
      data: req.body,
    });

    res.json(theater);
  } catch (err) {
    next(err);
  }
}

export async function deleteTheater(req, res, next) {
  try {
    const id = Number(req.params.id);

    await prisma.theater.delete({ where: { id } });

    res.json({ message: 'theater deleted' });
  } catch (err) {
    next(err);
  }
}

export async function searchTheaters(req, res, next) {
  try {
    const { location, category } = req.query;

    const theaters = await prisma.theater.findMany({
      where: {
        location: location || undefined,
        category: category || undefined,
      },
    });

    res.json(theaters);
  } catch (err) {
    next(err);
  }
}
