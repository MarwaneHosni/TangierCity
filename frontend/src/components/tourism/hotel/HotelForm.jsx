import { useState, useEffect } from 'react';
import api from '../../../services/api.js';
import { Input } from '@/components/ui/input.jsx';
import { Hotel, FileText, Image, MapPin, Star, DollarSign, Tag } from 'lucide-react';
import { useAuth } from '../../../auth/AuthContext.jsx';

export default function HotelForm({ hotel, onClose, onSaved }) {
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

  const { user } = useAuth();
  useEffect(() => {
    if (hotel) {
      setForm({
        name: hotel.name || '',
        description: hotel.description || '',
        image: hotel.image || '',
        location: hotel.location || '',
        rating: hotel.rating || 0,
        pricePerNight: hotel.pricePerNight || 0,
        checkInTime: hotel.checkInTime
          ? new Date(hotel.checkInTime).toISOString().slice(11, 16)
          : '',
        checkOutTime: hotel.checkOutTime
          ? new Date(hotel.checkOutTime).toISOString().slice(11, 16)
          : '',
        category: hotel.category || '',
      });
    }
  }, [hotel]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!hotel) {
      setForm({
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
    }
  }, [hotel]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (hotel) {
        // Editing
        const res = await api.put(
          `/api/tourism/hotels/${hotel.id}`,
          {
            ...form,
            rating: Number(form.rating),
            pricePerNight: Number(form.pricePerNight),
            checkInTime: new Date(`1970-01-01T${form.checkInTime}:00`),
            checkOutTime: new Date(`1970-01-01T${form.checkOutTime}:00`),
          },
          { headers: { Authorization: `Bearer ${user.token}` } },
        );
        onSaved(res.data);
      } else {
        // Adding
        const res = await api.post(
          '/api/tourism/hotels',
          {
            ...form,
            rating: Number(form.rating),
            pricePerNight: Number(form.pricePerNight),
            checkInTime: new Date(`1970-01-01T${form.checkInTime}:00`),
            checkOutTime: new Date(`1970-01-01T${form.checkOutTime}:00`),
          },
          { headers: { Authorization: `Bearer ${user.token}` } },
        );
        onSaved(res.data);
      }
    } catch (error) {
      console.error('Failed to save hotel:', error);
      alert('Failed to save hotel.');
    }
  };
  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      {/* Hotel Name */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium text-gray-700'>Hotel Name</label>
        <div className='relative'>
          <Hotel className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <Input
            name='name'
            placeholder='Enter hotel name'
            onChange={handleChange}
            value={form.name}
            className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600 focus:ring-2 focus:ring-black/20'
          />
        </div>
      </div>

      {/* Description */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium text-gray-700'>Description</label>
        <div className='relative'>
          <FileText className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <Input
            name='description'
            placeholder='Short description'
            onChange={handleChange}
            value={form.description}
            className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>
      </div>

      {/* Image URL */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium text-gray-700'>Image URL</label>
        <div className='relative'>
          <Image className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <Input
            name='image'
            placeholder='https://example.com/image.jpg'
            onChange={handleChange}
            value={form.image}
            className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>
      </div>

      {/* Location */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium text-gray-700'>Location</label>
        <div className='relative'>
          <MapPin className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <Input
            name='location'
            placeholder='City, Country'
            onChange={handleChange}
            value={form.location}
            className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>
      </div>

      {/* Rating & Price */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Rating</label>
          <div className='relative'>
            <Star className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <Input
              type='number'
              name='rating'
              placeholder='1–5'
              onChange={handleChange}
              value={form.rating}
              className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
            />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Price / Night</label>
          <div className='relative'>
            <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <Input
              type='number'
              name='pricePerNight'
              placeholder='USD'
              onChange={handleChange}
              value={form.pricePerNight}
              className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
            />
          </div>
        </div>
      </div>

      {/* Check-in & Check-out */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Check-in</label>
          <Input
            type='time'
            name='checkInTime'
            onChange={handleChange}
            value={form.checkInTime}
            className='h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Check-out</label>
          <Input
            type='time'
            name='checkOutTime'
            onChange={handleChange}
            value={form.checkOutTime}
            className='h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>
      </div>

      {/* Category */}
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-medium text-gray-700'>Category</label>
        <div className='relative'>
          <Tag className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <Input
            name='category'
            placeholder='Luxury, Budget, Resort...'
            onChange={handleChange}
            value={form.category}
            className='pl-10 h-11 rounded-xl border-gray-300 bg-slate-100 text-gray-600'
          />
        </div>
      </div>

      <button
        type='submit'
        className='mt-2 h-11  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded hover:text-black transition'
      >
        {hotel ? 'Update Hotel' : 'Create Hotel'}
      </button>
    </form>
  );
}
