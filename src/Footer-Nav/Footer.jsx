import { 
  FaPlane, 
  FaHotel, 
  FaLandmark, 
  FaGlobe, 
  FaHotTub 
} from 'react-icons/fa';

// الشعار والصور
import logoImg from '../assets/logo.png';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpg';

// translation
import '../i18n';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white text-gray-500 font-sans pt-12 pb-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- القسم العلوي: الشعار --- */}
        <div className="mb-8">
          <img 
            src={logoImg} 
            alt="Travel Tent Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* --- القسم الأوسط: الأعمدة الأربعة --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-sm leading-relaxed mb-16">
          
          {/* العمود الأول والثاني: TRAVEL WITH US & PARTNER WITH US */}
          <div className="lg:col-span-4 space-y-6">
            {/* TRAVEL WITH US */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#267cfd] inline-block"></span>
                <h3 className="text-[#267cfd] font-semibold tracking-wider text-xs uppercase">
                  {t("TRAVEL WITH US")}
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-5 mb-3">
                {t("No matter who you are, or where you are going, our travel brands help every type of traveler not only find the trip that's right for them, but get the best value every time.")}
              </p>
              {/* أيقونات السفر الزرقاء الصغيرة */}
              <div className="flex items-center gap-3 text-[#26BBFD] text-base pt-1">
                <FaPlane className="cursor-pointer hover:opacity-80 transition-opacity" />
                <FaHotel className="cursor-pointer hover:opacity-80 transition-opacity" />
                <FaLandmark className="cursor-pointer hover:opacity-80 transition-opacity" />
                <FaGlobe className="cursor-pointer hover:opacity-80 transition-opacity" />
                <FaHotTub className="cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>

            {/* PARTNER WITH US */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#267cfd] inline-block"></span>
                <h3 className="text-[#267cfd] font-semibold tracking-wider text-xs uppercase">
                  {t("PARTNER WITH US")}
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-5">
                {t("We connect partners big and small to the universe of travelers, giving access to data, tools and technology that empowers, maximizes potential and builds their business.")}
              </p>
            </div>
          </div>

          {/* العمود الثالث: COMPANY */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[#267cfd] font-semibold tracking-wider text-xs uppercase mb-4">
              {t("COMPANY")}
            </h3>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-[#26BBFD] transition-colors">{t("About")}</a></li>
              <li><a href="#contact" className="hover:text-[#26BBFD] transition-colors">{t("Contact Us")}</a></li>
              <li><a href="#share" className="hover:text-[#26BBFD] transition-colors">{t("Share")}</a></li>
              <li><a href="#help" className="hover:text-[#26BBFD] transition-colors">{t("Help")}</a></li>
              <li><a href="#language" className="hover:text-[#26BBFD] transition-colors">{t("Language")}</a></li>
            </ul>
          </div>

          {/* العمود الرابع: POLICIES */}
          <div className="lg:col-span-2">
            <h3 className="text-[#267cfd] font-semibold tracking-wider text-xs uppercase mb-4">
              {t("POLICIES")}
            </h3>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#privacy" className="hover:text-[#26BBFD] transition-colors">{t("Privacy Policy")}</a></li>
              <li><a href="#terms" className="hover:text-[#26BBFD] transition-colors">{t("Terms & Conditions")}</a></li>
            </ul>
          </div>

          {/* العمود الخامس: CONNECT WITH US */}
          <div className="lg:col-span-3">
            <h3 className="text-[#267cfd] font-semibold tracking-wider text-xs uppercase mb-4">
              {t("CONNECT WITH US")}
            </h3>
            <ul className="space-y-3 text-xs text-gray-500">
              <li><a href="#facebook" className="hover:text-[#26BBFD] transition-colors">{t("Facebook")}</a></li>
              <li><a href="#instagram" className="hover:text-[#26BBFD] transition-colors">{t("Instagram")}</a></li>
              <li><a href="#twitter" className="hover:text-[#26BBFD] transition-colors">{t("Twitter")}</a></li>
              <li><a href="#youtube" className="hover:text-[#26BBFD] transition-colors">{t("YouTube")}</a></li>
            </ul>
          </div>

        </div>

        {/* --- القسم السفلي: الحقوق + طرق الدفع --- */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          {/* نص حقوق الملكية */}
          <div>
            {t("© 2023 Travel Tent. All rights reserved.")}
          </div>

          {/* أيقونات وسائل الدفع */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Visa */}
            <div className="h-7 px-2.5 rounded flex items-center justify-center">
              <img src={i1} alt="Visa" className="h-4 w-auto object-contain" />
            </div>

            {/* stc pay */}
            <div className="h-7 px-2.5 rounded flex items-center justify-center">
              <img src={i2} alt="STC Pay" className="h-4 w-auto object-contain" />
            </div>

            {/* Mastercard */}
            <div className="h-7 px-2.5 rounded flex items-center justify-center">
              <img src={i3} alt="Mastercard" className="h-4 w-auto object-contain" />
            </div>

            {/* mada */}
            <div className="h-7 px-2.5 rounded flex items-center justify-center">
              <img src={i4} alt="Mada" className="h-4 w-auto object-contain" />
            </div>

            {/* Apple Pay */}
            <div className="h-7 px-2.5 rounded flex items-center justify-center">
              <img src={i5} alt="Apple Pay" className="h-4 w-auto object-contain" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}