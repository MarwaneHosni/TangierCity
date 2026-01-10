import prisma from '../../prisma/prisma.js';

export async function getLibraries(req, res, next) {
  try {
    const libraries = await prisma.library.findMany();
    res.json(libraries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching libraries' });
  }
}

export async function getLibraryById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const library = await prisma.library.findUnique({ where: { id } });
    if (!library) return res.status(404).json({ message: 'library not found' });
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching library' });
  }
}

export async function createLibrary(req, res) {
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
    const library = await prisma.library.create({
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
    res.status(201).json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating library' });
  }
}

export async function updateLibrary(req, res) {
  try {
    const id = Number(req.params.id);
    const library = await prisma.library.update({
      where: { id },
      data: req.body,
    });
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating library' });
  }
}

export async function deleteLibrary(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.library.delete({ where: { id } });
    res.json({ message: 'library deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting library' });
  }
}

export async function searchLibraries(req, res) {
  try {
    const { location, category } = req.query;
    const libraries = await prisma.library.findMany({
      where: {
        location: location ? location : undefined,
        category: category ? category : undefined,
      },
    });
    res.json(libraries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching libraries' });
  }
}
