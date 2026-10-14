// App.jsx
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Hotel from "./PagesTwo/Hotel";
import HotelVeiw from "./PagesTwo/HotelVeiw";

// مكونات صفحات تجريبية

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* المكون الأب Layout يحوي الناف بار والفوتر */}
        <Route path="/" element={<Layout />}>
          {/* الصفحات التي ستظهر داخل الـ Outlet */}
          <Route index element={<Home />} />
        </Route>
        
        <Route path="/Hotel" element={<Layout />}>
          {/* الصفحات التي ستظهر داخل الـ Outlet */}
          <Route index element={<Hotel />} />
        </Route>
        <Route path="/HotelVeiw" element={<Layout />}>
          {/* الصفحات التي ستظهر داخل الـ Outlet */}
          <Route index element={<HotelVeiw />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
