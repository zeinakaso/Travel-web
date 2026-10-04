// App.jsx
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// مكونات صفحات تجريبية
function Home() {
  return <h2 className="text-2xl font-bold">هذه هي الصفحة الرئيسية 🏠</h2>;
}

function About() {
  return <h2 className="text-2xl font-bold">هذه صفحة من نحن ℹ️</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* المكون الأب Layout يحوي الناف بار والفوتر */}
        <Route path="/" element={<Layout />}>
          
          {/* الصفحات التي ستظهر داخل الـ Outlet */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;