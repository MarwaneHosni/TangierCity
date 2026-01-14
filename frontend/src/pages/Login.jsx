import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Mail, MoveLeft, DoorOpen, Hotel, Hammer, University, Compass } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate('/');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='relative w-1/2 h-full'>
        {/* Background image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: "url('/assets/tangier1.jpg')",
          }}
        />

        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/90' />

        {/* Content */}
        <div className='relative z-10 flex flex-col gap-8 justify-center items-start p-10 h-full'>
          <div className='flex items-center gap-6'>
            <DoorOpen className='w-20 h-20 text-white bg-blue-200/20 p-2 rounded-xl' />
            <div>
              <h1 className='text-4xl font-bold text-white'>Tangier City</h1>
              <h2 className='text-xl text-white/50'>CITY PORTAL</h2>
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-extrabold'>Welcome to Your</h1>
            <h1 className='text-4xl text-yellow-500 font-extrabold'>City Portal</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center gap-4 p-6 w-60 bg-white/10 shadow-2xl rounded-xl'>
              <Hotel className='w-10 h-10 text-white/40' />
              <div>
                <h1 className='text-2xl text-white font-extrabold'>450+</h1>
                <h2 className='text-lg text-white/70'>Hotels</h2>
              </div>
            </div>

            <div className='flex items-center gap-4 p-6 w-60 bg-white/10 shadow-2xl rounded-xl'>
              <Hammer className='w-10 h-10 text-white/40' />
              <div>
                <h1 className='text-2xl text-white font-extrabold'>3.5k+</h1>
                <h2 className='text-lg text-white/70'>Jobs</h2>
              </div>
            </div>

            <div className='flex items-center gap-4 p-6 w-60 bg-white/10 shadow-2xl rounded-xl'>
              <University className='w-10 h-10 text-white/40' />
              <div>
                <h1 className='text-2xl text-white font-extrabold'>24</h1>
                <h2 className='text-lg text-white/70'>Universities</h2>
              </div>
            </div>

            <div className='flex items-center gap-4 p-6 w-60 bg-white/10 shadow-2xl rounded-xl'>
              <Compass className='w-10 h-10 text-white/40' />
              <div>
                <h1 className='text-2xl text-white font-extrabold'>340+</h1>
                <h2 className='text-lg text-white/70'>Businesses</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-1/2 h-full justify-center items-center bg-blue-50/40'>
        <a className='text-sm text-gray-600 flex flex-row gap-2 m-2 hover:font-bold' href='/'>
          <MoveLeft />
          Go back to Home
        </a>

        <div className='p-8 w-1/2 bg-white shadow-xl rounded-xl'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-extrabold'>Welcome!</h1>
            <h2 className='pb-6 text-gray-500'>Sign-In to your Tangier City account.</h2>
          </div>
          <div>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-row gap-2'>
                <Mail className='text-sm w-4' />
                <label className='font-bold'>Email</label>
              </div>
              <Input
                placeholder='Email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="'pl-10 h-10 rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-50"
              />
              <div className='flex flex-row gap-2'>
                <Lock className='text-sm w-4' />
                <label className='font-bold'>Password</label>
              </div>
              <Input
                type='password'
                placeholder='Password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="'pl-10 h-10 rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-50"
              />

              {error && <p className='text-red-600'>{error}</p>}

              <Button className='w-full bg-blue-600 rounded text-white mt-4 mb-4 hover:bg-blue-700'>
                Login
              </Button>
            </form>

            <p className='text-sm text-gray-600'>
              Don't have an account?{' '}
              <a className='underline font-semibold' href='/signup'>
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
