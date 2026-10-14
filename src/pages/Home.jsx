
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SearchCard from "./SearchCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* الحاوية الرئيسية */}
     
        
        {/* --- قسم الهيرو العلوي --- */}
        <section className="relative w-full h-[658px] overflow-hidden">
          <SearchCard />
          
          {/* زر الانتقال لصفحة الفنادق */}
          



        </section>

        {/* --- باقي الأقسام --- */}
        <section className="w-full" >
          <SectionTwo />
        </section>

        <section className="w-full">
          <SectionThree />
        </section>

        <section className="w-full">
          <SectionFour />
        </section>
      </div>
    
  );
}