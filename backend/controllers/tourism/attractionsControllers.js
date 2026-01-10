import prisma from '../../prisma/prisma.js';

export async function getAttractions(req, res, next) {
  try {
    const attractions = await prisma.attraction.findMany();
    res.json(attractions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching attractions' });
  }
}

export async function getAttractionById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const attraction = await prisma.attraction.findUnique({ where: { id } });

    if (!attraction)
      return res.status(404).json({ message: 'attraction not found' });

    res.json(attraction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching attraction' });
  }
}

export async function createAttraction(req, res) {
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

    const attraction = await prisma.attraction.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        pricePerNight : Number(pricePerNight),
        openTime: Date.parse(checkInTime),
        closeTime: Date.parse(checkOutTime),
        category,
      },
    });

    res.status(201).json(attraction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating attraction' });
  }
}

export async function updateAttraction(req, res) {
  try {
    const id = Number(req.params.id);

    const attraction = await prisma.attraction.update({
      where: { id },
      data: req.body,
    });

    res.json(attraction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating attraction' });
  }
}

export async function deleteAttraction(req, res) {
  try {
    const id = Number(req.params.id);

    await prisma.attraction.delete({ where: { id } });

    res.json({ message: 'attraction deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting attraction' });
  }
}

export async function searchAttractions(req, res) {
  try {
    const { location, category } = req.query;
    const attractions = await prisma.attraction.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(attractions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching attractions' });
  }
}
