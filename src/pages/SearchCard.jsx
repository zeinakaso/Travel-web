import { useState, useRef, useEffect } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import p from "../assets/Isolation_Mode.png";
import p1 from "../assets/icon (3).png";
import p2 from "../assets/Rectangle.png";
import p22 from "../assets/Group.png";

// translation
import '../i18n';
import { useTranslation } from "react-i18next";

export default function SearchCard() {
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState("hotel");

  // --- 1. حالات التفاعل (States) ---
  const [destination, setDestination] = useState("Spain");
  const [checkInDate, setCheckInDate] = useState("2026-10-23");
  const [checkOutDate, setCheckOutDate] = useState("2026-11-20");
  const [roomsCount, setRoomsCount] = useState(1);
  const [travelersCount, setTravelersCount] = useState(2);

  // --- 2. حالات التحكم بالقوائم المنسدلة (Popups) ---
  const [openDropdown, setOpenDropdown] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [i18n]);

  const countries = [
    "Spain",
    "France",
    "Saudi Arabia",
    "Turkey",
    "United Arab Emirates",
    "Italy",
    "United Kingdom",
    "Germany",
  ];

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="relative w-full min-h-[640px] md:h-[658px] overflow-hidden bg-white">
      {/* 1. خلفية الجبال */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 w-full h-full"
        style={{
          backgroundImage: `url(${p2})`,
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* 2. التعرجات السفلية */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
        <img
          src={p22}
          alt="Wave Background"
          className="w-full h-auto object-cover block min-h-[40px]"
        />
      </div>

      {/* 3. الشكل الأزرق الديكوري على اليسار */}
      <img
        src={p}
        alt="Blue decorative shape"
        className="
          absolute
          left-0
          bottom-[-40px] md:bottom-[-80px]
          w-[140px] md:w-[300px]
          h-auto
          object-contain
          z-20
          pointer-events-none
        "
      />

      {/* 4. الشعار العلوي الشفاف */}
      <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <img
          src={p1}
          alt="Brand Logo Watermark"
          className="w-36 md:w-60 h-auto object-contain mix-blend-multiply opacity-30"
        />
      </div>

      {/* 5. كارد البحث المطابق للفيجما */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 pt-20 md:pt-12">
        <div
          ref={cardRef}
          className="relative z-20 bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-[460px] border border-slate-100"
        >
          {/* التبويبات العلوية (Flight, Hotel, Visa) مطابقة للفيجما */}
          <div className="flex items-center justify-around mb-6 px-1">
            {/* Flight */}
            <button
              onClick={() => setActiveTab("flight")}
              className={`flex items-center gap-2.5 px-5.5 py-2.5 rounded-l text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "flight"
                  ? "bg-[#EEF4FF] text-[#2A6CFF]"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              aria-label="okay"
            >
              <FlightTakeoffIcon
                sx={{
                  fontSize: 20,
                  color: activeTab === "flight" ? "#2A6CFF" : "#60A5FA",
                }}
              />
              <span>{t("Flight")}</span>
            </button>

            {/* Hotel */}
            <button
              onClick={() => setActiveTab("hotel")}
              className={`flex items-center gap-2.5 px-5.5 py-2.5 rounded-l text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "hotel"
                  ? "bg-[#EEF4FF] text-[#2A6CFF]"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              aria-label="okay"
            >
              <HotelIcon
                sx={{
                  fontSize: 20,
                  color: activeTab === "hotel" ? "#2A6CFF" : "#93C5FD",
                }}
              />
              <span>{t("Hotel")}</span>
            </button>

            {/* Visa */}
            <button
              onClick={() => setActiveTab("visa")}
              className={`flex items-center gap-2.5 px-5.5 py-2.5 rounded-l text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "visa"
                  ? "bg-[#EEF4FF] text-[#2A6CFF]"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              aria-label="okay"
            >
              <CardTravelIcon
                sx={{
                  fontSize: 20,
                  color: activeTab === "visa" ? "#2A6CFF" : "#93C5FD",
                }}
              />
              <span>{t("Visa")}</span>
            </button>
          </div>

          {/* حقول الإدخال والبحث */}
          <div className="space-y-3.5 relative text-left rtl:text-right">
            {/* --- 1. حقل Going to المنسدل --- */}
            <div className="relative">
              <div
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "destination" ? null : "destination"
                  )
                }
                className="border border-[#4C82F6] rounded-xl px-4 py-3 bg-white flex items-center justify-between h-[52px] cursor-pointer hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center w-full overflow-hidden gap-2">
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                    {t("Going to")}:
                  </span>
                  <span className="text-[#2A6CFF] font-bold text-base truncate">
                    {t(destination)}
                  </span>
                </div>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: 20 }}
                  className="text-slate-500 flex-shrink-0"
                />
              </div>

              {/* القائمة المنسدلة لاختيار الدولة */}
              {openDropdown === "destination" && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-48 overflow-y-auto p-1.5 animate-in fade-in zoom-in duration-150">
                  {countries.map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setDestination(c);
                        setOpenDropdown(null);
                      }}
                      className={`flex items-center gap-2 px-3.5 py-2.5 text-xs rounded-lg cursor-pointer transition-colors ${
                        destination === c
                          ? "bg-blue-50 text-[#2A6CFF] font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <LocationOnIcon
                        sx={{ fontSize: 16 }}
                        className={
                          destination === c ? "text-[#2A6CFF]" : "text-slate-400"
                        }
                      />
                      <span>{t(c)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* --- 2. الحقلين السفليين (Check-in / Travelers) --- */}
            <div className="grid grid-cols-2 gap-3 relative">
              {/* --- Check in-out (اختيار التواريخ) --- */}
              <div className="relative">
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === "dates" ? null : "dates")
                  }
                  className="border border-[#4C82F6] rounded-xl px-3.5 py-2.5 bg-white flex items-center justify-between cursor-pointer h-[54px] hover:border-blue-500 transition-colors"
                >
                  <div className="overflow-hidden">
                    <span className="block text-[11px] text-slate-400 font-medium leading-none mb-1">
                      {t("Check in-out")}:
                    </span>
                    <span className="text-[#2A6CFF] font-bold text-xs sm:text-sm truncate block">
                      {formatDateDisplay(checkInDate)} -{" "}
                      {formatDateDisplay(checkOutDate)}
                    </span>
                  </div>
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: 20 }}
                    className="text-slate-500 flex-shrink-0"
                  />
                </div>

                {/* النافذة المنسدلة للتواريخ */}
                {openDropdown === "dates" && (
                  <div className="absolute top-full left-0 w-[240px] sm:w-[260px] mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-4 space-y-3 animate-in fade-in duration-150">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        {t("CHECK-IN")}
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        {t("CHECK-OUT")}
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                    aria-label="okay"
                      onClick={() => setOpenDropdown(null)}
                      className="w-full bg-[#2A6CFF] text-white text-xs font-bold py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                    >
                      {t("Done")}
                    </button>
                  </div>
                )}
              </div>

              {/* --- Travelers & Rooms (اختيار المسافرين والغرف) --- */}
              <div className="relative">
                <div
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "travelers" ? null : "travelers"
                    )
                  }
                  className="border border-[#4C82F6] rounded-xl px-3.5 py-2.5 bg-white flex items-center justify-between cursor-pointer h-[54px] hover:border-blue-500 transition-colors"
                >
                  <div className="overflow-hidden">
                    <span className="block text-[11px] text-slate-400 font-medium leading-none mb-1">
                      {t("Travelers")}
                    </span>
                    <span className="text-[#2A6CFF] font-bold text-xs sm:text-sm truncate block">
                      {roomsCount} {t("room").toLowerCase()}, {travelersCount} {t("travelers").toLowerCase()}
                    </span>
                  </div>
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: 20 }}
                    className="text-slate-500 flex-shrink-0"
                  />
                </div>

                {/* النافذة المنسدلة للعدادات */}
                {openDropdown === "travelers" && (
                  <div className="absolute top-full right-0 w-[220px] mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-4 space-y-4 animate-in fade-in duration-150">
                    {/* عداد الغرف */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-700 block">
                          {t("Rooms")}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {t("Number of rooms")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                        aria-label="okay"
                          onClick={() =>
                            setRoomsCount(Math.max(1, roomsCount - 1))
                          }
                          className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                        >
                          <RemoveIcon sx={{ fontSize: 12 }} />
                        </button>
                        <span className="text-xs font-bold text-slate-800">
                          {roomsCount}
                        </span>
                        <button
                        aria-label="okay"
                          onClick={() => setRoomsCount(roomsCount + 1)}
                          className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                        >
                          <AddIcon sx={{ fontSize: 12 }} />
                        </button>
                      </div>
                    </div>

                    {/* عداد المسافرين */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <div>
                        <span className="text-xs font-bold text-slate-700 block">
                          {t("Travelers")}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {t("Adults & kids")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                        aria-label="okay"
                          onClick={() =>
                            setTravelersCount(Math.max(1, travelersCount - 1))
                          }
                          className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                        >
                          <RemoveIcon sx={{ fontSize: 12 }} />
                        </button>
                        <span className="text-xs font-bold text-slate-800">
                          {travelersCount}
                        </span>
                        <button
                        aria-label="okay"
                          onClick={() => setTravelersCount(travelersCount + 1)}
                          className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                        >
                          <AddIcon sx={{ fontSize: 12 }} />
                        </button>
                      </div>
                    </div>

                    <button
                    aria-label="okay"
                      onClick={() => setOpenDropdown(null)}
                      className="w-full bg-[#2A6CFF] text-white text-xs font-bold py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                    >
                      {t("Apply")}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* زر Find Now الأزرق Zesty المميز */}
            <button
            aria-label="okay"
              onClick={() => {
                alert(
                  `Searching for ${activeTab} in ${destination} from ${checkInDate} to ${checkOutDate} for ${travelersCount} travelers (${roomsCount} room)`
                );
              }}
              className="w-full bg-[#2A6CFF] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-xs transition duration-200 mt-2 text-sm md:text-base cursor-pointer active:scale-[0.99]"
            >
              {t("Find Now")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}