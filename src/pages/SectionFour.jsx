// استيراد صور الكاردات
import cardImg1 from '../assets/img2.webp'; // صورة الحقائب والطائرة
import cardImg2 from '../assets/img1.webp'; // صورة البحر والأناناس
import cardImg3 from '../assets/img3.webp'; // صورة الجبال العلوية
import cardImg4 from '../assets/img4.webp'; // صورة البحر العريضة (Quick Trips)

// translation
import '../i18n';
import { useTranslation } from "react-i18next";

export default function SectionFour() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- العنوان الرئيسي --- */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#1e293b] uppercase">
            {t("MORE FOR YOU")}
          </h2>
        </div>

        {/* --- شبكة البطاقات (Grid Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* الكارد 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <img src={cardImg1} alt="Extended Stay" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3">
              <h3 className="text-gray-900 text-sm font-bold">{t("Extended Stay")}</h3>
              <p className="text-gray-600 text-l mt-1 leading-relaxed">
                {t("Your request has been completed, please go to your request.")}
              </p>
            </div>
          </div>

          {/* الكارد 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <img src={cardImg2} alt="New year, new adventure" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3">
              <h3 className="text-gray-900 text-sm font-bold">{t("New year, new adventure")}</h3>
              <p className="text-gray-600 text-l mt-1 leading-relaxed">
                {t("Your request has been completed, please go to your request.")}
              </p>
            </div>
          </div>

          {/* الكارد 3 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <img src={cardImg3} alt="Extended Stay" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3">
              <h3 className="text-gray-900 text-sm font-bold">{t("Extended Stay")}</h3>
              <p className="text-gray-600 text-l mt-1 leading-relaxed">
                {t("Your request has been completed, please go to your request.")}
              </p>
            </div>
          </div>

          {/* الكارد 4 (العريض يساراً في الصف الثاني - يأخذ عمودين في الشاشات الكبيرة) */}
          <div className="flex flex-col group cursor-pointer lg:col-span-2">
            <div className="relative w-full h-[220px] md:h-[240px] rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
              <img src={cardImg4} alt="Quick Trips" className="w-full h-full object-cover" />
              {/* تدرج لوني خفيف فوق الصورة لإبراز العنوان الأبيض */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-base md:text-lg font-bold">{t("Quick Trips")}</h3>
              </div>
            </div>
          </div>

          {/* الكارد 5 (الكارد الأزرق الإعلاني يميناً) */}
          <div className="flex flex-col  bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded-2xl p-6 text-white cursor-pointer shadow-sm relative overflow-hidden h-[200px] md:h-[240px]">
            <div
            
            >
              <h2 
              style={{fontSize:"35px",
                fontWeight:"600"
              }}
              className=" md:text-2xl font-bold leading-snug whitespace-pre-line">
                {t("Show all the \n  packages,\n view now")}
              </h2>
              <br />
              <p
              style={{fontSize:"20px",
                fontWeight:"300",
                marginBottom:"30px",

              }}
              className="text-white  md:text-sm ">
                {t("Discover dream destinations")}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}