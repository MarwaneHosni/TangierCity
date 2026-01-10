import prisma from '../../prisma/prisma.js';

export async function geteducationCenters(req, res, next) {
  try {
    const educationCenters = await prisma.educationCenter.findMany();
    res.json(educationCenters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Education Centers' });
  }
}

export async function geteducationCenterById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const educationCenter = await prisma.educationCenter.findUnique({ where: { id } });
    if (!educationCenter) return res.status(404).json({ message: 'Education Center not found' });
    res.json(educationCenter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Education Center' });
  }
}

export async function createeducationCenter(req, res) {
  try {
    const {
      name,
      description,
      image,
      location,
      rating,
      openTime,
      closeTime,
      category,
    } = req.body;
    const educationCenter = await prisma.educationCenter.create({
      data: {
        name,
        description,
        image,
        location,
        rating: Number(rating),
        openTime: new Date(openTime),
        closeTime: new Date(closeTime),
        category,
      },
    });
    res.status(201).json(educationCenter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating Education Center' });
  }
}

export async function updateeducationCenter(req, res) {
  try {
    const id = Number(req.params.id);
    const educationCenter = await prisma.educationCenter.update({
      where: { id },
      data: req.body,
    });
    res.json(educationCenter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating Education Center' });
  }
}

export async function deleteeducationCenter(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.educationCenter.delete({ where: { id } });
    res.json({ message: 'Education Center deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting Education Center' });
  }
}

export async function searcheducationCenters(req, res) {
  try {
    const { location, category } = req.query;
    const educationCenters = await prisma.educationCenter.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(educationCenters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching Education Center' });
  }
}
