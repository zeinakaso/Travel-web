import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, IconButton } from "@mui/material";

// أيقونات MUI
import PlaceIcon from "@mui/icons-material/Place";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import Slider from "@mui/material/Slider";
import pp from "../assets/11.webp"; // استبدل حسب مسار الصورة لديك
import { Helmet } from "react-helmet-async";

// translation
import "../i18n";
import { useTranslation } from "react-i18next";

// export const INITIAL_FILTERS = {
//   price: 300,
//   guestRating: [],
//   starRating: [],
//   propertyType: [],
// };

export default function Hotel() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === "ar";

  const [activeModal, setActiveModal] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1);
  const [selectedCheckIn, setSelectedCheckIn] = useState(23);
  const [selectedCheckOut, setSelectedCheckOut] = useState(27);
  // جعل القيمة الافتراضية في المنتصف (150$) تماماً كما في التصميم
  const [priceLimit, setPriceLimit] = useState(150);

  // إغلاق أي موديل عند النقر في أي مكان خارج الموديل
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".modal-container") &&
        !event.target.closest(".modal-trigger")
      ) {
        setActiveModal(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.title = `${t("Hotel")}`;
    return () => document.removeEventListener("mousedown", handleClickOutside);
    
  }, []);

  // حالات الفلاتر الجانبية التفاعلية

  const [selectedRating, setSelectedRating] = useState(["any"]); // تم تعديلها لتتوافق مع الـ checkbox
  const [selectedStars, setSelectedStars] = useState([1, 2, 3, 4, 5]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([
    "Hotel",
    "Apart-hotel",
    "Residence",
  ]);

  // const isArabic = i18n.language?.startsWith("ar");
  document.documentElement.dir === "rtl";
  // إذا لم يكن متغير price موجوداً، أضفه في أعلى الفانكشن:
  // const [price, setPrice] = useState(100); // أو القيمة الافتراضية المناسبة لك

  // حساب النسبة المئوية للـ Range بشكل صحيح ومرن:
  // const min = 10;
  // const max = 300;
  // const percentage = ((price - min) / (max - min)) * 100;

  const monthsList = [
    { name: "January", days: 31, startDay: 3 },
    { name: "February", days: 28, startDay: 6 },
    { name: "March", days: 31, startDay: 0 },
    { name: "April", days: 30, startDay: 3 },
  ];

  const [rooms, setRooms] = useState([
    { adults: 1, children: 1 },
    { adults: 1, children: 1 },
  ]);

  const currentMonth = monthsList[currentMonthIndex];
  const nextMonth = monthsList[(currentMonthIndex + 1) % monthsList.length];

  // بيانات الفنادق للتصفية التفاعلية مع ترجمة أسمائها
  const allHotels = [
    {
      id: 1,
      name: "Royal Hotel",
      price: 120,
      rating: 9.2,
      stars: 4,
      type: "Hotel",
      distanceKey: "30 K.m from the city centre",
    },
    {
      id: 2,
      name: "Grand Palace",
      price: 220,
      rating: 8.5,
      stars: 4,
      type: "Apart-hotel",
      distanceKey: "15 K.m from the city centre",
    },
    {
      id: 3,
      name: "Blue Sea Resort",
      price: 90,
      rating: 7.8,
      stars: 3,
      type: "Hotel",
      distanceKey: "45 K.m from the city centre",
    },
    {
      id: 4,
      name: "Elite Residence",
      price: 280,
      rating: 9.6,
      stars: 5,
      type: "Residence",
      distanceKey: "5 K.m from the city centre",
    },
  ];

  const filteredHotels = allHotels.filter((hotel) => {
    // 1. تنظيف وتحويل السعر إلى رقم مهما كانت صيغته (سواء رقم أو نص)
    const hotelPrice =
      Number(String(hotel.price).replace(/[^0-9.-]+/g, "")) || 0;

    console.log(
      "Hotel Price:",
      hotel.price,
      " | Price Limit:",
      priceLimit,
      " | Match:",
      hotel.price <= priceLimit,
    );
    // فحص مطابقة السعر
    const matchPrice = hotelPrice <= priceLimit;

    // فحص باقي الفلاتر
    const matchRating = selectedRating.includes("any")
      ? true
      : (selectedRating.includes("wonderful") && hotel.rating >= 9) ||
        (selectedRating.includes("verygood") && hotel.rating >= 8) ||
        (selectedRating.includes("good") && hotel.rating >= 7);

    const matchStars = selectedStars.includes(hotel.stars);
    const matchType = selectedPropertyTypes.includes(hotel.type);

    return matchPrice && matchRating && matchStars && matchType;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative select-none">
      <Helmet>
        <title>{t("Hotel")} </title>
      </Helmet>
      {/* --- المحتوى الرئيسي --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* --- شريط البحث العلوي --- */}
        <div
        
         style={{
           borderRadius:"10px 0 0 10px"
         }}
        className="bg-white border border-slate-200  p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-3 relative z-20 mb-12">
          {/* خانة الموقع (Going to) */}
          <div className="md:col-span-4 relative">
            <div
              onClick={() =>
                setActiveModal(activeModal === "location" ? null : "location")
              }
              className={`modal-trigger border rounded-xl px-3.5 py-2.5 cursor-pointer transition-all flex items-center gap-3 ${activeModal === "location" ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"}`}
            >
              <div className="text-blue-500 shrink-0">
                <PlaceIcon />
              </div>
              <div className="flex flex-col justify-center text-left rtl:text-right">
                <span className="text-[11px] text-slate-600 leading-tight">
                  {t("Going to")}:
                </span>
                <span className="text-sm font-medium text-blue-600 truncate mt-0.5">
                  {t("Berlin (and vicinity), Germany")}
                </span>
              </div>
            </div>

            {/* مودال الموقع */}
            {activeModal === "location" && (
              <div className="modal-container absolute top-full start-0 mt-2 w-full md:w-[380px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 z-50 text-left rtl:text-right">
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  {t("Location")}
                </h3>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 text-slate-600 text-xs bg-white hover:border-slate-300 transition-all">
                    <LanguageRoundedIcon style={{ color: "#26BBFD" }} />
                    <input
                      type="text"
                      placeholder={t("Country")}
                      className="bg-transparent w-full outline-none text-slate-800 placeholder-slate-400 text-xs"
                    />
                  </div>

                  <div className="border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 text-slate-600 text-xs bg-white hover:border-slate-300 transition-all">
                    <PlaceOutlinedIcon style={{ color: "#26BBFD" }} />
                    <input
                      type="text"
                      placeholder={t("Where are you going?")}
                      className="bg-transparent w-full outline-none text-slate-800 placeholder-slate-400 text-xs"
                    />
                  </div>

                  <div className="text-blue-600 text-xs font-medium flex items-center gap-1.5 cursor-pointer pt-1">
                    <PlaceIcon />
                    <span>{t("Set Point On Map")}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] text-slate-500 block mb-2">
                      {t("Distance from my location")}
                    </span>
                    <input
                      type="range"
                      className="w-full accent-blue-600 cursor-pointer"
                      defaultValue="30"
                    />
                    <div className="flex justify-between text-[11px] text-blue-600 font-medium mt-1">
                      <span>10 K.m</span>
                      <span>50 K.m</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-slate-700 block mb-2">
                      {t("Results")}
                    </span>
                    {[1, 2, 3].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-600 pb-2 border-b border-slate-50 last:border-0"
                      >
                        <PlaceIcon />
                        <div>
                          <p className="font-semibold text-slate-700 leading-tight">
                            Makkah
                          </p>
                          <p className="text-[10px] text-slate-600 mt-0.5">
                            Province, Saudi Arabia
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. خانة التواريخ (Check in-out) */}
          <div className="md:col-span-4 relative">
            <div
              onClick={() =>
                setActiveModal(activeModal === "calendar" ? null : "calendar")
              }
              className={`modal-trigger border rounded-xl px-3.5 py-2.5 cursor-pointer transition-all flex items-center justify-between ${activeModal === "calendar" ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"}`}
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-500 shrink-0">
                  <CalendarMonthIcon />
                </div>
                <div className="flex flex-col justify-center text-left rtl:text-right">
                  <span className="text-[11px] text-slate-600 leading-tight">
                    {t("Check in-out")}:
                  </span>
                  <span className="text-sm font-medium text-blue-600 mt-0.5">
                    Oct 23 - Nov 20
                  </span>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-slate-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {activeModal === "calendar" && (
              <div className="modal-container absolute top-full left-1/2 -translate-x-1/2 max-w-[400px]   mt-2 w-[calc(100vw-32px)] sm:w-[500px] bg-white border border-slate-200 rounded-[6px] sm:rounded-3xl shadow-2xl p-3 sm:p-5 z-50 text-left rtl:text-right">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  {t("Check in-out")}
                </h3>

                <div className="flex items-center justify-between bg-slate-50/80 border border-slate-100 p-2.5 sm:p-3 rounded-2xl mb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-600">
                      {selectedCheckIn} {currentMonth.name.slice(0, 3)}
                    </span>
                    <p className="text-[10px] text-slate-600">Thursday</p>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sky-400 text-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 16,
                        transform: isRtl ? "rotate(180deg)" : "none",
                      }}
                    />
                  </div>

                  <div className="text-right rtl:text-left">
                    <span className="text-xs font-bold text-slate-600">
                      {selectedCheckOut} {nextMonth.name.slice(0, 3)}
                    </span>
                    <p className="text-[10px] text-slate-600">Saturday</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <IconButton
                      size="small"
                      onClick={() =>
                        setCurrentMonthIndex((prev) =>
                          prev > 0 ? prev - 1 : 0,
                        )
                      }
                      className="text-slate-600 hover:text-slate-600"
                    >
                      {isRtl ? (
                        <ChevronRightIcon fontSize="small" />
                      ) : (
                        <ChevronLeftIcon fontSize="small" />
                      )}
                    </IconButton>

                    <div className="flex items-center gap-6 sm:gap-12">
                      <span className="text-xs font-bold text-slate-600">
                        {currentMonth.name}
                      </span>
                      <span className="text-xs font-bold text-slate-600 hidden sm:inline">
                        {nextMonth.name}
                      </span>
                    </div>

                    <IconButton
                      size="small"
                      onClick={() =>
                        setCurrentMonthIndex((prev) =>
                          prev < monthsList.length - 2 ? prev + 1 : prev,
                        )
                      }
                      className="text-slate-600 hover:text-slate-600"
                    >
                      {isRtl ? (
                        <ChevronLeftIcon fontSize="small" />
                      ) : (
                        <ChevronRightIcon fontSize="small" />
                      )}
                    </IconButton>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-xs">
                    <div>
                      <div className="sm:hidden text-center text-xs font-bold text-slate-600 mb-1">
                        {currentMonth.name}
                      </div>
                      <div
                        className="grid grid-cols-7 text-[10px] text-slate-800 font-medium mb-1"
                        style={{ fontWeight: "700" }}
                      >
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                        <span>Su</span>
                      </div>
                      <div className="grid grid-cols-7 gap-y-1 text-[11px] text-slate-700">
                        {Array.from({ length: currentMonth.startDay }).map(
                          (_, i) => (
                            <span key={`empty-1-${i}`} />
                          ),
                        )}
                        {Array.from({ length: currentMonth.days }).map(
                          (_, i) => {
                            const day = i + 1;
                            const isSelected = day === selectedCheckIn;
                            const isInRange =
                              day > selectedCheckIn &&
                              day < 28 &&
                              currentMonthIndex === 1;
                            return (
                              <span
                                key={i}
                                onClick={() => setSelectedCheckIn(day)}
                                className={`py-1 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-blue-600 text-white font-bold shadow-sm"
                                    : isInRange
                                      ? "bg-sky-100 text-blue-900 font-medium"
                                      : "hover:bg-slate-100"
                                }`}
                              >
                                {day}
                              </span>
                            );
                          },
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="sm:hidden text-center text-xs font-bold text-slate-600 mb-1 mt-1">
                        {nextMonth.name}
                      </div>
                      <div
                        className="grid grid-cols-7 text-[10px] text-slate-800 font-medium mb-1"
                        style={{ fontWeight: "700" }}
                      >
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                        <span>Su</span>
                      </div>
                      <div className="grid grid-cols-7 gap-y-1 text-[11px] text-slate-700">
                        {Array.from({ length: nextMonth.startDay }).map(
                          (_, i) => (
                            <span key={`empty-2-${i}`} />
                          ),
                        )}
                        {Array.from({ length: nextMonth.days }).map((_, i) => {
                          const day = i + 1;
                          const isSelected = day === selectedCheckOut;
                          return (
                            <span
                              key={i}
                              onClick={() => setSelectedCheckOut(day)}
                              className={`py-1 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-blue-600 text-white font-bold shadow-sm"
                                  : "hover:bg-slate-100"
                              }`}
                            >
                              {day}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. خانة المسافرين (Travelers) */}
          <div className="md:col-span-3 relative">
            <div
              onClick={() =>
                setActiveModal(activeModal === "travelers" ? null : "travelers")
              }
              className={`modal-trigger border rounded-xl px-3.5 py-2.5 cursor-pointer transition-all flex items-center justify-between ${activeModal === "travelers" ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"}`}
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-500 shrink-0">
                  <GroupsRoundedIcon />
                </div>
                <div className="flex flex-col justify-center text-left rtl:text-right">
                  <span className="text-[11px] text-slate-600 leading-tight">
                    {t("Travelers")}
                  </span>
                  <span className="text-sm font-medium text-blue-600 mt-0.5">
                    {rooms.length} {t("Rooms").toLowerCase()},{" "}
                    {rooms.reduce((acc, r) => acc + r.adults + r.children, 0)}{" "}
                    {t("Travelers").toLowerCase()}
                  </span>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-slate-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {activeModal === "travelers" && (
              <div className="modal-container absolute top-full right-0 mt-2 w-full md:w-[350px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 z-50 text-left rtl:text-right">
                <h3 className="text-sm font-bold text-slate-800 mb-4">
                  {t("Travelers")}
                </h3>

                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {rooms.map((room, index) => (
                    <div key={index}>
                      {index > 0 && <hr className="border-slate-100 my-4" />}

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-700">
                          {t("Room")} {index + 1}
                        </span>
                        {index > 0 && (
                          <button
                            aria-label="rooms"
                            onClick={() =>
                              setRooms(rooms.filter((_, i) => i !== index))
                            }
                            className="text-red-400 hover:text-red-500 cursor-pointer p-1 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs font-semibold text-slate-600">
                            {t("Adults")}
                          </p>
                        </div>
                        <div className="flex items-center border border-blue-300 rounded-xl px-2.5 py-1 bg-white">
                          <button
                            aria-label=" remove Adults"
                            onClick={() => {
                              const updated = [...rooms];
                              if (updated[index].adults > 1)
                                updated[index].adults -= 1;
                              setRooms(updated);
                            }}
                            className="text-blue-300 hover:text-slate-600 text-sm font-bold px-1.5 cursor-pointer select-none"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold text-slate-800 px-3">
                            {room.adults}
                          </span>
                          <button
                            aria-label="add adults"
                            onClick={() => {
                              const updated = [...rooms];
                              updated[index].adults += 1;
                              setRooms(updated);
                            }}
                            className="text-blue-300 hover:text-slate-600 text-sm font-bold px-1.5 cursor-pointer select-none"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-600">
                            {t("Children")}
                          </p>
                          <span className="text-[10px] text-slate-600">
                            {t("Age: 0-17")}
                          </span>
                        </div>
                        <div className="flex items-center border border-blue-300 rounded-xl px-2.5 py-1 bg-white">
                          <button
                            aria-label="children"
                            onClick={() => {
                              const updated = [...rooms];
                              if (updated[index].children > 0)
                                updated[index].children -= 1;
                              setRooms(updated);
                            }}
                            className="text-blue-300 hover:text-slate-600 text-sm font-bold px-1.5 cursor-pointer select-none"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold text-slate-800 px-3">
                            {room.children}
                          </span>
                          <button
                            aria-label="add"
                            onClick={() => {
                              const updated = [...rooms];
                              updated[index].children += 1;
                              setRooms(updated);
                            }}
                            className="text-blue-300 hover:text-slate-600 text-sm font-bold px-1.5 cursor-pointer select-none"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center border-t border-slate-100 mt-4">
                  <button
                    aria-label="Add Another Room"
                    onClick={() =>
                      setRooms([...rooms, { adults: 1, children: 0 }])
                    }
                    className="text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {t("+ Add Another Room")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. زر البحث */}
          <div className="md:col-span-1 relative flex ">
            <button
               
              aria-label="search"
              onClick={() =>
                setActiveModal(
                  activeModal === "searchPanel" ? null : "searchPanel",
                )
              }
              className="modal-trigger w-full h-full bg-blue-600 hover:bg-blue-700 text-white rounded-[6px] flex items-center justify-center gap-1.5 px-2 shadow-md transition-colors min-h-[48px] text-xs font-semibold cursor-pointer"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                }}
              >
                <div style={{ margin: "auto" }}>
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="truncate">{t("Find Now")}</span>
                </div>
              </div>
            </button>

            {activeModal === "searchPanel" && (
              <div className="modal-container absolute top-full right-0 mt-2 w-[220px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 z-50 text-left rtl:text-right">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800">
                    {t("Quick Search")}
                  </h3>
                  <button
                    aria-label=" quick search"
                    onClick={() => setActiveModal(null)}
                    className="text-slate-600 hover:text-slate-600 text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 bg-slate-50">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder={t("Search hotels, keywords...")}
                      className="bg-transparent text-xs w-full outline-none text-slate-800"
                      autoFocus
                    />
                  </div>
                  <button
                    aria-label="apply"
                    onClick={() => setActiveModal(null)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-xs font-bold shadow-md transition-colors cursor-pointer"
                  >
                    {t("Apply")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- قسم الفلاتر والنتائج --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left rtl:text-right">
          {/* الفلاتر الجانبية */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-base font-bold text-slate-800">
              {t("Filter by")}
            </h2>
            <Divider style={{ borderColor: "#26BBFD29", marginBottom: "30px" }} />

            {/* السعر لكل ليلة */}
            <div
              className=" pb-6 pr-2"
              dir={isRtl ? "rtl" : "ltr"}
            >
              {/* العنوان وبادج السعر المختار */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700">
                  {t("Price per night")}
                </span>

                
              </div>

              {/* سلايدر السعر المضبوط منطقياً وبصرياً */}
              <Slider
                min={10}
                max={300}
                step={1}
                value={priceLimit}
                onChange={(_, newValue) => {
                  const val = Array.isArray(newValue) ? newValue[0] : newValue;
                  setPriceLimit(val);
                }}
                aria-label={t("Price per night")}
                sx={{
                  color: "#2563EB",
                  height: 4,
                  padding: "13px 0",
                  "& .MuiSlider-thumb": {
                    width: 16,
                    height: 16,
                    backgroundColor: "#2563EB",
                    border: "3px solid #2563EB",
                    boxShadow: "none",
                    transition: "box-shadow 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 0 0 6px rgba(37, 99, 235, 0.10)",
                    },
                    "&.Mui-active": {
                      boxShadow: "0 0 0 8px rgba(37, 99, 235, 0.12)",
                    },
                    "&.Mui-focusVisible": {
                      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.15)",
                    },
                  },
                  "& .MuiSlider-track": {
                    height: 4,
                    border: "none",
                    borderRadius: 999,
                    backgroundColor: "#2563EB",
                  },
                  "& .MuiSlider-rail": {
                    height: 4,
                    borderRadius: 999,
                    backgroundColor: "#E2E8F0",
                    opacity: 1,
                  },
                }}
              />

              {/* الحد الأدنى والأعلى تحت السلايدر */}
              <div className="flex items-center justify-between mt-1 text-xs font-semibold text-slate-400">
                <span>$10</span>
                <span>$300</span>
              </div>
            </div>

            {/* تقييم النزلاء (تم تحويله إلى checkbox تماماً مثل باقي الخيارات) */}
            <div className=" pb-6">
              <span className="text-xs font-bold text-slate-700 block mb-3">
                {t("Guest rating")}
              </span>
              <div className="space-y-2 text-xs text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRating.includes("any")}
                    onChange={() => {
                      if (selectedRating.includes("any")) {
                        setSelectedRating([]);
                      } else {
                        setSelectedRating(["any"]);
                      }
                    }}
                    className="accent-blue-600 rounded"
                  />{" "}
                  {t("Any")}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRating.includes("wonderful")}
                    onChange={() => {
                      if (selectedRating.includes("wonderful")) {
                        setSelectedRating(
                          selectedRating.filter((r) => r !== "wonderful"),
                        );
                      } else {
                        setSelectedRating([
                          ...selectedRating.filter((r) => r !== "any"),
                          "wonderful",
                        ]);
                      }
                    }}
                    className="accent-blue-600 rounded"
                  />{" "}
                  {t("Wonderful 9+")}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRating.includes("verygood")}
                    onChange={() => {
                      if (selectedRating.includes("verygood")) {
                        setSelectedRating(
                          selectedRating.filter((r) => r !== "verygood"),
                        );
                      } else {
                        setSelectedRating([
                          ...selectedRating.filter((r) => r !== "any"),
                          "verygood",
                        ]);
                      }
                    }}
                    className="accent-blue-600 rounded"
                  />{" "}
                  {t("Very good 8+")}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRating.includes("good")}
                    onChange={() => {
                      if (selectedRating.includes("good")) {
                        setSelectedRating(
                          selectedRating.filter((r) => r !== "good"),
                        );
                      } else {
                        setSelectedRating([
                          ...selectedRating.filter((r) => r !== "any"),
                          "good",
                        ]);
                      }
                    }}
                    className="accent-blue-600 rounded"
                  />{" "}
                  {t("Good 7+")}
                </label>
              </div>
            </div>

            {/* عدد النجوم */}
            <div className="  pb-6">
              <span className="text-xs font-bold text-slate-700 block mb-3">
                {t("Star rating")}
              </span>
              <div className="space-y-2 text-xs text-slate-600">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={star}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStars.includes(star)}
                      onChange={() => {
                        if (selectedStars.includes(star)) {
                          setSelectedStars(
                            selectedStars.filter((s) => s !== star),
                          );
                        } else {
                          setSelectedStars([...selectedStars, star]);
                        }
                      }}
                      className="accent-blue-600 rounded"
                    />{" "}
                    {t(`${star} Star`)}
                  </label>
                ))}
              </div>
            </div>

            {/* نوع الإقامة */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-3">
                {t("Payment type")}
              </span>
              <div className="space-y-2 text-xs text-slate-600">
                {["Hotel", "Apart-hotel", "Residence"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPropertyTypes.includes(type)}
                      onChange={() => {
                        if (selectedPropertyTypes.includes(type)) {
                          setSelectedPropertyTypes(
                            selectedPropertyTypes.filter((t) => t !== type),
                          );
                        } else {
                          setSelectedPropertyTypes([
                            ...selectedPropertyTypes,
                            type,
                          ]);
                        }
                      }}
                      className="accent-blue-600 rounded"
                    />{" "}
                    {t(type)}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* قائمة الفنادق (بدون خلفية بيضاء، مع خط فاصل سفلي وتأثير خط أزرق عند الهوفر) */}
          {/* قائمة الفنادق (تم تصغير العرض العام للكاردات لتكون أنحف وأجمل) */}
<div className="lg:col-span-8 max-w-4xl space-y-4">
  {filteredHotels.map((hotel) => (
    <div
      key={hotel.id}
      onClick={() => navigate(`/HotelVeiw`)}
      className="bg-transparent border-b border-slate-200 py-5 px-2 relative group flex flex-col md:flex-row items-start justify-between gap-5 transition-all cursor-pointer"
    >
      {/* خط أزرق تحت الكارد عند الهوفر */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></div>

      <div className="flex flex-col md:flex-row gap-4 items-start flex-1 w-full">
        {/* عرض الصورة وصغرها */}
        <div
          className="relative w-full md:w-[266px] h-[162px] overflow-hidden shrink-0"
          style={{ borderRadius: "2.5px" }}
        >
          <img
            src={pp}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute bottom-0 start-0 bg-white text-black text-[11px] font-bold px-2 py-0.5 flex items-center gap-1 shadow-sm rtl:end-0 rtl:start-auto"
            style={{ borderRadius: "1.5px" }}
          >
            <span style={{ fontSize: "11px" }}>{hotel.rating}</span>
            <span style={{ color: "orange", fontSize: "16px" }}>★</span>
          </div>
        </div>

        <div className="flex-1 space-y-1.5">
          <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {t(hotel.name)}
          </h3>

          <div className="flex items-center gap-4 text-xs text-slate-500 pt-0.5">
            <span className="flex items-center gap-1.5">
              <TsunamiOutlinedIcon
                style={{ color: "#26BBFD", fontSize: "16px" }}
              />{" "}
              {t("Pool")}
            </span>
            <span className="flex items-center gap-1.5">
              <FreeBreakfastOutlinedIcon
                style={{ color: "#26BBFD", fontSize: "16px" }}
              />
              {t("Breakfast included")}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-0.5">
            <PlaceIcon style={{ color: "orange", fontSize: "16px" }} />
            <span style={{ color: "black" }}>
              {t(hotel.distanceKey)}
            </span>
          </div>

          <p className="text-xs text-slate-500 line-clamp-1 pt-0.5">
            {t(
              "lorem ipsum dolor sit amet, consecte adipiscing elit...",
            )}
          </p>
        </div>
      </div>

      {/* السعر في الطرف */}
      <div className="text-right rtl:text-left shrink-0 self-start md:self-end flex flex-col items-end rtl:items-start justify-end pb-1 ml-auto rtl:ml-0 rtl:mr-auto">
        <span className="text-lg font-bold text-blue-600 leading-tight">
          {hotel.price} SAR
        </span>
        <span className="text-[10px] text-slate-500 mt-0.5">
          {t("Total for 1 night (incl. VAT)")}
        </span>
      </div>
    </div>
  ))}

  {filteredHotels.length === 0 && (
    <div className="text-center py-12 text-slate-600 text-sm">
      {t("No hotels match your selected filters.")}
    </div>
  )}
</div>
        </div>
      </main>
    </div>
  );
}
