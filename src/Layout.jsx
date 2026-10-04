import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>


      <main className="flex-grow pt-20 pb-10 px-6">
        <Outlet />
      </main>


      
    </>
  );
}
