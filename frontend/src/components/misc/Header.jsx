import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { Shield } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log('Header user:', user);
  const auth = useAuth();
  console.log('AUTH CONTEXT', auth);


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between p-4 pl-12 pr-10 bg-white shadow-lg border-b-2 border-gray-200">
      <Input
        placeholder="Search..."
        className="w-full max-w-xs rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-100"
      />

      <div className="flex items-center gap-4">
        {user ? (
          <>
            {user.role === 'ADMIN' && (
              <span className="px-3 py-1 flex gap-2 text-xs items-center font-bold rounded-full bg-yellow-100 text-yellow-600">
                <Shield className='text-xs'/>
                ADMIN
              </span>
            )}

            <Button
              onClick={handleLogout}
              className="text-white bg-gradient-to-bl from-red-600 to-red-500 rounded"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="text-white bg-gradient-to-bl from-blue-600 to-cyan-600 rounded">
              <Link to="/login">Log-In</Link>
            </Button>

            <Button className="text-blue-600 bg-blue-50 rounded">
              <Link to="/signup">Sign-Up</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
