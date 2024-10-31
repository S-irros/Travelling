import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/sign";
import Nav from "./pages/nav/nav";
import Home from "./pages/Home/home";
import Userdashboard from "./pages/user/userdashboard";
import Userdashboardupdate from "./pages/user/userdashboardupdate";
import { MyContext } from './pages/auth/context';
import Dashboard from "./pages/admin/dashboard";
import Dashboardupdate from "./pages/admin/dashboardupdate";
import Protect from "./pages/auth/protect";
import Error  from "./Erorr";
import PackageDetails from "./pages/tourlist.js/package-details";
import Payment from "./pages/payment/payment";
import Add from "./pages/admin/add";
import Updatedata from "./pages/admin/updatedata";
import TourDetails from "./pages/tourlist.js/package-details";

function App() {
  const { value } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation(); // هنستخدمها عشان نعرف الـ URL الحالي
  
  window.addEventListener('beforeunload', function () {
    localStorage.removeItem("sign");
  });

  const hideNavRoutes = ["/login", "/signup"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname); 

  return (
    <>
      {shouldShowNav && <Nav />} {/* هنخلي الـ Nav يظهر بس في الصفحات اللي مش موجودة في المصفوفة */}
      
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/package-details/:id" element={<PackageDetails />} />        
        <Route path="/payment" element = {<Payment />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />  
        <Route element={<Protect />}>
          {value?.person === "admin" ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/dashboardupdate/:id" element={<Dashboardupdate />} />
              <Route path="/edit/:id" element={<Updatedata />} />
            </>
          ) : null}
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/userdashboard/userdashboardupdate/:id" element={<Userdashboardupdate />} />
        </Route> 
      </Routes>
    </>
  );
}

export default App;
