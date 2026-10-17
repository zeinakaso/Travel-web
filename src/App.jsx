// App.jsx
import  { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// 1. استيراد الصفحات بشكل كسول (Lazy Loading)
const Home = lazy(() => import("./pages/Home"));
const Hotel = lazy(() => import("./PagesTwo/Hotel"));
const HotelVeiw = lazy(() => import("./PagesTwo/HotelVeiw"));

function App() {
  return (
    <BrowserRouter>
      {/* 2. تغليف المسارات بـ Suspense وإظهار مؤشر تحميل خفيف أثناء التنقل */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#2A6CFF]"></div>
          </div>
        }
      >
        <Routes>
          {/* المكون الأب Layout يحوي الناف بار والفوتر */}
          <Route path="/" element={<Layout />}>
            {/* الصفحات التي ستظهر داخل الـ Outlet */}
            <Route index element={<Home />} />
          </Route>

          <Route path="/Hotel" element={<Layout />}>
            <Route index element={<Hotel />} />
          </Route>

          <Route path="/HotelVeiw" element={<Layout />}>
            <Route index element={<HotelVeiw />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;