import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HotelForm from "./components/tourism/hotel/HotelForm";
import HotelLists from "./components/tourism/hotel/HotelLists";
import AdminRoute from "./auth/AdminRoute";
import CustomSidebar from "./components/misc/AppSidebar";
import Header from "./components/misc/Header";

const Layout = () => (
  <div className="flex">
    <CustomSidebar />
    <main className="flex-1">
      <Header />
      <Outlet /> 
    </main>
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Layout */}
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<HotelLists />} />

        {/* Admin only */}
        <Route
          path="admin/hotels/new"
          element={
            <AdminRoute>
              <HotelForm />
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
