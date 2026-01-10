import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 pl-12 pr-10 bg-white shadow-lg border-b-2 border-gray-200">
        <Input placeholder="Search..." className="w-full max-w-xs rounded-xl border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition border-gray-300 text-gray-500 bg-slate-100"/>
        <div>
            <Button className="ml-4 text-white bg-gradient-to-bl from-blue-600 to-cyan-600 rounded">Sign-In</Button>
            <Button className="ml-4 text-blue-600 bg-blue-50 rounded">Sign-Out</Button>
        </div>
    </div>
  )
}

export default Header