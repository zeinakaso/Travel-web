/* eslint-disable no-unused-vars */
import { useRef } from "react";
// استيراد Swiper المكونات والأنماط
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
  const isRtr = i18n.language === "ar";

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
  ];

  return (
    <section className="w-full bg-white py-10 font-sans overflow-hidden">
      {/* حاوية العنوان: محاذية تماماً لباقي أقسام الموقع القياسية */}
      <div className="w-full px-6 md:px-16 lg:px-24 relative mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#1e293b] uppercase">
            {t("VISA REQUIREMENTS")}
          </h2>
        </div>
      </div>

      {/* 
        حاوية السلايدر:
        تبدأ بالـ Padding القياسي للموقع من البداية وتترك الطرف الآخر مفتوحاً لتظهر البطاقة المقطوشة
      */}
      <div className="w-full ltr:pl-6 ltr:md:pl-16 ltr:lg:pl-24 ltr:pr-0 rtl:pr-6 rtl:md:pr-16 rtl:lg:pr-24 rtl:pl-0 overflow-visible">
        <Swiper
          key={i18n.language}
          modules={[Navigation]}
          dir={isRtr ? "rtl" : "ltr"}
          spaceBetween={20}
          slidesPerView="auto" // يتيح عرض أكثر من بطاقة مع قطع البطاقة الأخيرة
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="pb-2 !overflow-visible"
        >
          {visaCards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] sm:!w-[290px] md:!w-[310px]"
            >
              <div className="flex flex-col group cursor-pointer pb-2">
                {/* حاوية الصورة */}
                <div className="relative w-full h-[180px] md:h-[200px] rounded-lg overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300">
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
                  <h3
                    style={{ fontWeight: "500", fontSize: "16px" }}
                    className="text-gray-800 tracking-wide group-hover:text-sky-600 transition-colors font-medium"
                  >
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
