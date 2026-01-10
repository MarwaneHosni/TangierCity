import { useState } from 'react';
import api from '../../../services/api.js';

export default function HotelForm() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    image: '',
    location: '',
    rating: 0,
    pricePerNight: 0,
    checkInTime: '',
    checkOutTime: '',
    category: '',
  });

  function handleChange(e) {
    const { name, value, type } = e.target;

    let parsedValue = value;

    if (type === 'number') {
      parsedValue = value === '' ? '' : Number(value);
    }

    if (type === 'time') {
      parsedValue = value;
    }

    setForm({ ...form, [name]: parsedValue });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/api/tourism/hotels', {
      ...form,
      rating: Number(form.rating),
      pricePerNight: Number(form.pricePerNight),
      checkInTime: new Date(`1970-01-01T${form.checkInTime}:00`),
      checkOutTime: new Date(`1970-01-01T${form.checkOutTime}:00`),
    });

    alert('Hotel added!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' placeholder='Hotel Name' onChange={handleChange} />
      <input name='description' placeholder='Description' onChange={handleChange} />
      <input name='image' placeholder='Image URL' onChange={handleChange} />
      <input name='location' placeholder='Location' onChange={handleChange} />

      <input type='number' name='rating' placeholder='Rating' onChange={handleChange} />

      <input
        type='number'
        name='pricePerNight'
        placeholder='Price per night'
        onChange={handleChange}
      />

      <input type='time' name='checkInTime' onChange={handleChange} />

      <input type='time' name='checkOutTime' onChange={handleChange} />

      <input name='category' placeholder='Category' onChange={handleChange} />

      <button type='submit'>Create</button>
    </form>
  );
}
