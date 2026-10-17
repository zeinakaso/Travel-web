import { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

// استيراد الصور
import packageImg1 from "../assets/Group 2311 (2).webp";
import packageImg2 from "../assets/img2.webp";
import packageImg3 from "../assets/img1.webp";
import packageImg4 from "../assets/img3.webp";
import packageImg5 from "../assets/img2.webp";
import packageImg6 from "../assets/img1.webp";
// import packageImg7 from "../assets/Vector (1).webp";

// translation
import "../i18n";
import { useTranslation } from "react-i18next";

export default function SectionTwo() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const packagesData = [
    {
      id: 1,
      title: "Packages 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam odio condimentum in justo orci vitae ligula quis. Lacus etiam elit mi lacus scelerisque in consectetur. Feugiat commodo aenean adipiscing maecenas feugiat. Nibh tellus suscipit auctor nam malesuada non.",
      features: ["Hajj Drafts", "Hajj Visa", "Flights to Madinah"],
      image: packageImg1,
    },
    {
      id: 2,
      title: "Premium Hajj Package 2024",
      description:
        "Experience absolute comfort and premium VIP services designed for your spiritual journey. Includes luxury accommodation near Haram, high-speed transport, and dedicated guides throughout your stay.",
      features: ["VIP Accommodation", "Express Hajj Visa", "Direct Flights"],
      image: packageImg2,
    },
    {
      id: 3,
      title: "Economic Umrah Package",
      description:
        "A well-organized budget-friendly package offering all essential services, comfortable lodging, and group guidance to ensure a smooth and blessed pilgrimage experience.",
      features: ["Umrah Permit", "Shared Transport", "Hotel Near Clock Tower"],
      image: packageImg3,
    },
    {
      id: 4,
      title: "Family Special Package",
      description:
        "Tailored specifically for families with special care, spacious family rooms, private transport options, and customized itineraries for children and elderly members.",
      features: ["Family Rooms", "Private Transport", "Medical Assistance"],
      image: packageImg4,
    },
    {
      id: 5,
      title: "Ramadan Ultimate Package",
      description:
        "Spend the blessed month of Ramadan in the holy cities with full-board services, Iftar and Suhoor arrangements, and prime locations for seamless access to prayers.",
      features: ["Full-Board Meals", "Ramadan Itinerary", "VIP Lounge Access"],
      image: packageImg5,
    },
    {
      id: 6,
      title: "VIP Executive Package",
      description:
        "The pinnacle of luxury travel. Private jet options, presidential suites, personal concierge service 24/7, and exclusive security arrangements for elite travelers.",
      features: ["Presidential Suite", "Private Concierge", "Charter Flights"],
      image: packageImg6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? packagesData.length - 1 : currentIndex - 1;
    changeSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === packagesData.length - 1 ? 0 : currentIndex + 1;
    changeSlide(nextIdx);
  };

  const currentPackage = packagesData[currentIndex];

  return (
    <section className="relative w-full bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24 font-sans overflow-hidden">
      {/* --- العنوان الرئيسي --- */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#1e293b] uppercase">
          {t("SPECIAL PACKAGES")}
        </h2>
      </div>

      {/* --- المحتوى الرئيسي --- */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[380px]">
          {/* القسم النصي */}
          <div
            className={`lg:col-span-5 space-y-6 text-center lg:text-left rtl:lg:text-right order-2 lg:order-1 transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-x-[-10px]"
                : "opacity-100 translate-x-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              {t(currentPackage.title)}
            </h3>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed min-h-[90px]">
              {t(currentPackage.description)}
            </p>

            {/* المميزات */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 sm:gap-6 pt-2 text-xs md:text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#26BBFD] font-bold flex items-center justify-center">
                  <CheckSharpIcon sx={{ fontSize: 18 }} />
                </span>
                <span>{t(currentPackage.features[0])}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#26BBFD] font-bold flex items-center justify-center">
                  <CheckSharpIcon sx={{ fontSize: 18 }} />
                </span>
                <span>{t(currentPackage.features[1])}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#26BBFD] font-bold flex items-center justify-center">
                  <AirplanemodeActiveSharpIcon sx={{ fontSize: 18 }} />
                </span>
                <span>{t(currentPackage.features[2])}</span>
              </div>
            </div>

            {/* زر View Details */}
            <div className="pt-2 flex justify-center lg:justify-start rtl:lg:justify-start">
              <button 
              aria-label="View Details"
              className="px-8 py-3 rounded-lg border border-[#26BBFD] text-[#26BBFD] hover:bg-[#26BBFD] hover:text-white active:scale-95 transition-all duration-300 text-sm font-semibold cursor-pointer">
                {t("View Details")}
              </button>
            </div>
          </div>

          {/* القسم الأيمن: عرض الصورة */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img
                src={currentPackage.image}
                alt={currentPackage.title}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />
              {/* <img
                src={packageImg7}
                alt="decoration"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* --- شريط التنقل السفلي --- */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 mt-6 flex flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-600 font-medium select-none">
        
        {/* زر PREVIOUS (السابق) */}
        <button
        aria-label="previos"
          onClick={handlePrev}
          className="flex items-center gap-2 text-[#26BBFD] hover:opacity-80 transition-opacity cursor-pointer group"
        >
          <span className="text-sm font-light transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1">
            {/* في حال العربية يظهر سهم يشير لليمين (ArrowForward) وفي الإنجليزي سهم يشير لليصار (ArrowBack) */}
            {isRtl ? (
              <ArrowForwardOutlinedIcon sx={{ fontSize: 20 }} />
            ) : (
              <ArrowBackOutlinedIcon sx={{ fontSize: 20 }} />
            )}
          </span>
          <span className="tracking-widest font-semibold">{t("PREVIOUS")}</span>
        </button>

        {/* العداد الحالي */}
        <div className="text-gray-500 tracking-widest text-xs font-medium">
          {t("Showing")} {String(currentIndex + 1).padStart(2, "0")}/0
          {packagesData.length}
        </div>

        {/* زر NEXT (التالي) */}
        <button
        aria-label="next"
          onClick={handleNext}
          className="flex items-center gap-2 text-[#26BBFD] hover:opacity-80 transition-opacity cursor-pointer group"
        >
          <span className="tracking-widest font-semibold">{t("NEXT")}</span>
          <span className="text-sm font-light transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {/* في حال العربية يظهر سهم يشير لليسار (ArrowBack) وفي الإنجليزي سهم يشير لليمين (ArrowForward) */}
            {isRtl ? (
              <ArrowBackOutlinedIcon sx={{ fontSize: 20 }} />
            ) : (
              <ArrowForwardOutlinedIcon sx={{ fontSize: 20 }} />
            )}
          </span>
        </button>

      </div>
    </section>
  );
}