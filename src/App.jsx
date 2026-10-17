// App.jsx
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";

// 1. استيراد الصفحات بشكل كسول (Lazy Loading)
const Home = lazy(() => import("./pages/Home"));
const Hotel = lazy(() => import("./PagesTwo/Hotel"));
const HotelVeiw = lazy(() => import("./PagesTwo/HotelVeiw"));

 export default function App() {
  const { i18n } = useTranslation();

  // تحديث اتجاه ولغة المستند تلقائياً حسب لغة التطبيق المختارة (SEO & Accessibility)
  useEffect(() => {
    const currentLang = i18n.language || "ar";
    const isRtl = currentLang.startsWith("ar");

    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [i18n.language]);

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
            <Route path="Hotel" element={<Hotel />} />
            <Route path="HotelVeiw" element={<HotelVeiw />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// default App;