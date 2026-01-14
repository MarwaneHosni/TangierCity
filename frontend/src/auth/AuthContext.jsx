import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async ({ email, password }) => {
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error || 'Login failed');
    }

    const data = await res.json();

    localStorage.setItem(
      'user',
      JSON.stringify({
        email,
        role: data.role,
        token: data.token,
      })
    );

    setUser({
      email,
      role: data.role,
      token: data.token,
    });

    return data;
  };

  const signup = async ({ email, password }) => {
    const res = await fetch('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error || 'Signup failed');
    }

    return await res.json();
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
