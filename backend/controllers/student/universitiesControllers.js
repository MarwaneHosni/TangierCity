import prisma from '../../prisma/prisma.js';

export async function getUniversities(req, res, next) {
  try {
    const universities = await prisma.university.findMany();
    res.json(universities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching universities' });
  }
}

export async function getUniversityById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const university = await prisma.university.findUnique({ where: { id } });
    if (!university) return res.status(404).json({ message: 'university not found' });
    res.json(university);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching university' });
  }
}

export async function createUniversity(req, res) {
  try {
    const {
      name,
      description,
      image,
      location,
      rating,
      tuitionFee,
      openTime,
      closeTime,
      category,
    } = req.body;
    const university = await prisma.university.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        tuitionFee: Number(tuitionFee),
        openTime: new Date(openTime),
        closeTime: new Date(closeTime),
        category,
      },
    });
    res.status(201).json(university);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating university' });
  }
}

export async function updateUniversity(req, res) {
  try {
    const id = Number(req.params.id);
    const university = await prisma.university.update({
      where: { id },
      data: req.body,
    });
    res.json(university);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating university' });
  }
}

export async function deleteUniversity(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.university.delete({ where: { id } });
    res.json({ message: 'university deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting university' });
  }
}

export async function searchUniversities(req, res) {
  try {
    const { location, category } = req.query;
    const universities = await prisma.university.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(universities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching universities' });
  }
}
