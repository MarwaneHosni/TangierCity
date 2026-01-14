import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Lock,
  Mail,
  MoveLeft,
  DoorOpen,
  Hotel,
  Hammer,
  University,
  Compass,
} from 'lucide-react';

export default function Signup() {
  const { signup } = useAuth(); 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const passwordsMatch =
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordsMatch) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signup({
        email: form.email,
        password: form.password,
      });
      navigate('/');
    } catch {
      setError('Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      
      <div className="relative w-1/2 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/tangier1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/90" />

        <div className="relative z-10 flex flex-col gap-8 justify-center items-start p-10 h-full">
          <div className="flex items-center gap-6">
            <DoorOpen className="w-20 h-20 text-white bg-blue-200/20 p-2 rounded-xl" />
            <div>
              <h1 className="text-4xl font-bold text-white">Tangier City</h1>
              <h2 className="text-xl text-white/50">CITY PORTAL</h2>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-white font-extrabold">Create Your</h1>
            <h1 className="text-4xl text-yellow-500 font-extrabold">
              City Account
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat icon={Hotel} value="450+" label="Hotels" />
            <Stat icon={Hammer} value="3.5k+" label="Jobs" />
            <Stat icon={University} value="24" label="Universities" />
            <Stat icon={Compass} value="340+" label="Businesses" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2 h-full justify-center items-center bg-blue-50/40">
        <a
          className="text-sm text-gray-600 flex gap-2 m-2 hover:font-bold"
          href="/"
        >
          <MoveLeft /> Go back to Home
        </a>

        <div className="p-8 w-1/2 bg-white shadow-xl rounded-xl">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-extrabold">Create Account</h1>
            <h2 className="text-gray-500">
              Sign up for Tangier City
            </h2>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="font-bold flex gap-2">
              <Mail className="w-4" /> Email
            </label>
            <Input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <label className="font-bold flex gap-2">
              <Lock className="w-4" /> Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <label className="font-bold flex gap-2">
              <Lock className="w-4" /> Confirm Password
            </label>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />

            {form.confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-sm">
                Passwords do not match
              </p>
            )}

            {error && <p className="text-red-500">{error}</p>}

            <Button
              disabled={!passwordsMatch}
              className="w-full bg-blue-600 rounded text-white mt-4 mb-4 hover:bg-blue-700"
              href="/login"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a className="underline font-semibold" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-4 p-6 w-60 bg-white/10 shadow-2xl rounded-xl">
      <Icon className="w-10 h-10 text-white/40" />
      <div>
        <h1 className="text-2xl text-white font-extrabold">{value}</h1>
        <h2 className="text-lg text-white/70">{label}</h2>
      </div>
    </div>
  );
}
