import { useEffect, useState } from 'react';
import api from '../../../services/api.js';
import DataCard from '../../misc/card.jsx';
import { LucideHouse, LucidePlus, LucideSearch } from 'lucide-react';
import { Input } from '@/components/ui/input.jsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function HotelLists() {
  const [hotels, setHotels] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const formatTime = (dateString) => {
    if (!dateString) return '';
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateString));
  };

  useEffect(() => {
    api
      .get('/api/tourism/hotels')
      .then((res) => setHotels(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredHotels =
    categoryFilter === 'all' ? hotels : hotels.filter((hotel) => hotel.category === categoryFilter);

  return (
    <div className='min-h-screen bg-gray-50 p-2'>
      <div className='w-full mx-auto p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4 mb-8'>
            <LucideHouse className='w-10 h-10 text-2xl text-blue-600 bg-blue-200 p-2 rounded-xl' />
            <h1 className='text-3xl font-bold text-gray-900 m-0 leading-none'>Hotels</h1>
          </div>
          <button
            onClick={() => {
              window.location.href = '/add-hotel';
            }}
            className='mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded hover:bg-blue-700 transition'
          >
            <LucidePlus className='w-4 h-4 inline-block mr-2' />
            Add New Hotel
          </button>
        </div>
        <div className='flex w-full mb-2 gap-6'>
          <div className='flex pb-7 w-full relative'>
            <LucideSearch className='absolute w-5 h-5 ml-3 mt-3 text-gray-400' />
            <Input
              onInput={(e) => {
                const value = e.target.value.toLowerCase();
                setHotels(
                  hotels.filter((hotel) => hotel.name.toLowerCase().includes(value)),
                );
              }}
              type='text'
              placeholder='Search hotels...'
              className='pl-10 h-10 rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-100'
            />
          </div>
          <div>
            <Select onValueChange={(value) => setCategoryFilter(value)} defaultValue='all'>
              <SelectTrigger className='w-[180px] h-10 rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-100'>
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent className='rounded-xl border-gray-300 bg-slate-100 text-gray-500'>
                <SelectItem value='all'>All</SelectItem>
                <SelectItem value='hotel'>Hotel</SelectItem>
                <SelectItem value='apartment'>Apartment</SelectItem>
                <SelectItem value='villa'>Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {filteredHotels.map((h) => (
            <DataCard
              key={h.id}
              image={h.image}
              title={h.name}
              subtitle={h.category}
              description={h.description}
              location={h.location}
              rating={h.rating}
              price={`€${h.pricePerNight}/night`}
              tags={[
                `Check-in ${formatTime(h.checkInTime)}`,
                `Check-out ${formatTime(h.checkOutTime)}`,
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
