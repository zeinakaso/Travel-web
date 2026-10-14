import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Footer-Nav/Nav";
import Footer from "./Footer-Nav/Footer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    // الحاوية الكبرى تأخذ عرض الشاشة بالكامل وبدون قيود
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      
      {/* الناف بار يمتد بكامل عرض الشاشة */}
      <Nav />
      
      {/* محتوى الصفحات يمتد بكامل العرض */}
      <main className={`flex-grow w-full ${isHome ? "pt-0 px-0" : "pt-24 px-8"}`}>
        <Outlet />
      </main>

      {/* الفوتر يمتد بكامل عرض الشاشة */}
      <Footer />

    </div>
  );
}