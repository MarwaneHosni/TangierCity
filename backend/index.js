import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const hotelRoutes = await import('./routes/tourism/hotels.js');
const restaurantRoutes = await import('./routes/tourism/restaurants.js');
const theaterRoutes = await import('./routes/tourism/theaters.js');
const atmsRoutes = await import('./routes/tourism/atms.js');
const attractionRoutes = await import('./routes/tourism/attractions.js');

const universitiesRoutes = await import('./routes/student/universities.js');
const librariesRoutes = await import('./routes/student/libraries.js');
const educationCentersRoutes = await import('./routes/student/educationCenters.js');

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/tourism/hotels', hotelRoutes.default);
app.use('/api/tourism/restaurants', restaurantRoutes.default);
app.use('/api/tourism/theaters', theaterRoutes.default);
app.use('/api/tourism/atms', atmsRoutes.default);
app.use('/api/tourism/attractions', attractionRoutes.default);

app.use('/api/student/universities', universitiesRoutes.default);
app.use('/api/student/libraries', librariesRoutes.default);
app.use('/api/student/educationCenters', educationCentersRoutes.default);

app.use(function (req, res) {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(statusCode).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
