import { useRef } from "react";
// استيراد Swiper المكونات والأنماط
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// أيقونات التنقل
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// استيراد الصور الخاصة بالبطاقات
import usImg from "../assets/11.webp"; // صورة أمريكا
import ukImg from "../assets/44.webp"; // صورة بريطانيا
import germanyImg from "../assets/22.webp"; // صورة ألمانيا

// استيراد صور الأعلام الصغيرة
import usFlag from "../assets/3.webp";
import ukFlag from "../assets/2.webp";
import germanyFlag from "../assets/1.webp";

// translation
import "../i18n";
import { useTranslation } from "react-i18next";

export default function VisaRequirements() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const visaCards = [
    {
      id: 1,
      title: "United State",
      image: usImg,
      flag: usFlag,
    },
    {
      id: 2,
      title: "UK Online ( Visa )",
      image: ukImg,
      flag: ukFlag,
    },
    {
      id: 3,
      title: "Germany",
      image: germanyImg,
      flag: germanyFlag,
    },
    {
      id: 4,
      title: "United State",
      image: usImg,
      flag: usFlag,
    },
    {
      id: 5,
      title: "UK Online ( Visa )",
      image: ukImg,
      flag: ukFlag,
    },
    {
      id: 6,
      title: "Germany",
      image: germanyImg,
      flag: germanyFlag,
    },
  ];

  return (
    <section className="w-full bg-white py-10 pl-6 md:pl-16 lg:pl-24 pr-0 font-sans overflow-hidden">
    {/* حاوية العنوان بمحاذاة تامة مع البداية الأساسية */}
    <div className="w-full pl-0 pr-6 md:pr-16 lg:pr-24 relative mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#1e293b] uppercase">
          {t("VISA REQUIREMENTS")}
        </h2>
      </div>
    </div>

    {/* --- Swiper Carousel ملتصق بالبداية تماماً وبدون إزاحة يسارية --- */}
    <div className="w-full pl-0 overflow-visible">
      <Swiper
        key={i18n.language}
        modules={[Navigation, Pagination]}
        dir={isRtl ? "rtl" : "ltr"}
        spaceBetween={24}
        slidesPerView="auto"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 4.2, spaceBetween: 24 },
        }}
        className="pb-8 [&_.swiper-pagination]:!bottom-0"
      >
        {visaCards.map((card, index) => (
          <SwiperSlide key={index} className="!w-[280px] sm:!w-[300px] md:!w-[310px]">
            <div className="flex flex-col group cursor-pointer pb-2">
              {/* حاوية الصورة مع تدوير حواف خفيف */}
              <div className="relative w-full h-[190px] md:h-[210px] rounded-lg overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300">
                {/* خلفية الصورة */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* التدرج اللوني */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* علم الدولة بتصميم الشريط المائل (Ribbon) */}
                {card.flag && (
                  <div className="absolute top-3 right-0 w-[70px] h-[32px] overflow-hidden pointer-events-none z-10 rtl:left-0 rtl:right-auto">
                    <img
                      src={card.flag}
                      alt="flag"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        clipPath: `
                          polygon(
                            18% 0%,
                            100% 0%,
                            100% 100%,
                            18% 100%,
                            0% 78%,
                            14% 50%,
                            0% 22%
                          )
                        `,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* عنوان اسم الدولة تحت الكارد */}
              <div className="mt-2.5 mb-2 px-0.5">
                <h3 className="text-gray-800 text-sm font-bold tracking-wide group-hover:text-sky-600 transition-colors">
                  {t(card.title)}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  );
}