import prisma from '../../prisma/prisma.js';

export async function getAtms(req, res, next) {
  try {
    const atms = await prisma.atm.findMany();
    res.json(atms);
  } catch (err) {
    next(err);
  }
}

export async function getAtmById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const atm = await prisma.atm.findUnique({ where: { id } });

    if (!atm) {
      return res.status(404).json({ message: 'atm not found' });
    }

    res.json(atm);
  } catch (err) {
    next(err);
  }
}

export async function createAtm(req, res, next) {
  try {
    const {
      name,
      description,
      image,
      location,
      available,
      openTime,
      closeTime,
      category,
    } = req.body;

    const atm = await prisma.atm.create({
      data: {
        name,
        description,
        image,
        location,
        available,
        openTime:Date.parse(openTime),
        closeTime:Date.parse(closeTime),
        category,
      },
    });

    res.status(201).json(atm);
  } catch (err) {
    next(err);
  }
}

export async function updateAtm(req, res, next) {
  try {
    const id = Number(req.params.id);

    const atm = await prisma.atm.update({
      where: { id },
      data: req.body,
    });

    res.json(atm);
  } catch (err) {
    next(err);
  }
}

export async function deleteAtm(req, res, next) {
  try {
    const id = Number(req.params.id);

    await prisma.atm.delete({ where: { id } });

    res.json({ message: 'atm deleted' });
  } catch (err) {
    next(err);
  }
}

export async function searchAtms(req, res, next) {
  try {
    const { location, category } = req.query;

    const atms = await prisma.atm.findMany({
      where: {
        location: location || undefined,
        category: category || undefined,
      },
    });

    res.json(atms);
  } catch (err) {
    next(err);
  }
}
