import React from 'react';
import HotelForm from './components/tourism/hotel/HotelForm';
import HotelLists from './components/tourism/hotel/HotelLists';
import CustomSidebar from './components/misc/AppSidebar';
import Header from './components/misc/Header';

const App = () => {
  return (
     <div className="flex">
      <CustomSidebar />
      <main className="flex-1 ">
        <Header />
       <HotelLists />
      </main>
    </div>
  
  );
};

export default App;
