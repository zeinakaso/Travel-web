/* eslint-disable no-undef */
/* eslint-disable react-hooks/purity */
import { useState, useRef, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import HotelIcon from "@mui/icons-material/Hotel";
import PeopleIcon from "@mui/icons-material/People";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import DirectionsSubwayOutlinedIcon from "@mui/icons-material/DirectionsSubwayOutlined";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
// import ForestIcon from "@mui/icons-material/Forest";
// import FlightIcon from "@mui/icons-material/Flight";
// استيراد الصور
import mainImg from "../assets/h1.webp";
import img2 from "../assets/h2.webp";
import img3 from "../assets/h3.webp";
import img4 from "../assets/h4.webp";
import img5 from "../assets/h5.webp";
// import { Divider } from "@mui/material";
import Rating from "@mui/material/Rating";
// import StarIcon from "@mui/icons-material/Star";
// translation
import "../i18n";
import { useTranslation } from "react-i18next";

export default function HotelDetails() {
  const { t, i18n } = useTranslation();

  //reviews
  const [userNameInput, setUserNameInput] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    const newRev = {
      id: Date.now(),
      name: userNameInput.trim() || t("John Dou"),
      rating: userRating,
      comment: reviewText,
      date: new Date().toLocaleDateString(),
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewText("");
    setUserNameInput("");
    setUserRating(5);
  };

  // حالة لتحديد التبويب النشط حالياً
  const [activeTab, setActiveTab] = useState("overview");

  // حالة التحكم بفتح وإغلاق مودال الحجز (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // حالات خيارات المودال (الخيارات الإضافية وطريقة الدفع)
  const [selectedExtra, setSelectedExtra] = useState("none");
  const [paymentMethod, setPaymentMethod] = useState("mastercard");

  //date
  // حالة لكل مربّع من المربعات الثلاثة (Check in, Check out, Guests / Date)
  const [dates, setDates] = useState({
    checkIn: "Oct 23",
    checkOut: "Nov 20",
    guests: "2 Adults, 1 Child",
  });

  // حالة لتحديد المربع المفتوح حالياً (إما null أو 'checkIn' أو 'checkOut')
  const [activeDatePicker, setActiveDatePicker] = useState(null);

  const containerRef = useRef(null);
  // إغلاق المودال فوراً عند النقر في أي مكان خارجي
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveDatePicker(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "Review Name",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Volutpat at sit ac posuere consequat nulla pellentesque cursus faucibus.",
    },
    {
      id: 2,
      name: "Review Name",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Volutpat at sit ac posuere consequat nulla pellentesque cursus faucibus.",
    },
    {
      id: 3,
      name: "Review Name",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Volutpat at sit ac posuere consequat nulla pellentesque cursus faucibus.",
    },
  ]);

  // مراجع (Refs) للوصول للأقسام عند الضغط على الأزرار
  const overviewRef = useRef(null);
  const roomsRef = useRef(null);
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);

  // دالة التمرير السلس إلى القسم المستهدف
  const scrollToSection = (tabName, refElement) => {
    setActiveTab(tabName);
    if (refElement.current) {
      refElement.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const handleAddReview = (e) => {
  //   e.preventDefault();
  //   if (!reviewText.trim()) return;
  //   const newRev = {
  //     id: Date.now(),
  //     name: "User Review",
  //     rating: userRating,
  //     comment: reviewText,
  //   };
  //   setReviewsList([newRev, ...reviewsList]);
  //   setReviewText("");
  // };

  // بيانات الغرف لعرضها في شبكة البطاقات
  const roomsData = [
    {
      id: 1,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: mainImg,
      price: "$245",
      total: "$266 total",
    },
    {
      id: 2,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: img2,
      price: "$245",
      total: "$266 total",
    },
    {
      id: 3,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: img3,
      price: "$245",
      total: "$266 total",
    },
    {
      id: 4,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: img4,
      price: "$245",
      total: "$266 total",
    },
    {
      id: 5,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: img5,
      price: "$245",
      total: "$266 total",
    },
    {
      id: 6,
      title: "Economy Double Room, 1 Double Bed, Non Smoking",
      img: mainImg,
      price: "$245",
      total: "$266 total",
    },
  ];

  return (
    <div className="w-full bg-white font-sans pb-20 relative">
      {/* --- 1. معرض الصور العلوي (Gallery) --- */}
      <div className="max-w-7xl mx-auto px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* الصورة الرئيسية الكبيرة على اليسار */}
        <div
          style={{ width: "555" }}
          className="lg:col-span-7 h-[350px] md:h-[450px] overflow-hidden rounded-[6px] shadow-sm"
        >
          <img
            src={mainImg}
            alt="Main Hotel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* شبكة الصور الصغيرة الأربعة على اليمين */}
        <div
          style={{ width: "278" }}
          className="lg:col-span-5 grid grid-cols-2 gap-4 h-[350px] md:h-[450px]"
        >
          <div className="overflow-hidden rounded-[6px] shadow-sm h-full">
            <img
              src={img2}
              alt="Hotel view 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm h-full">
            <img
              src={img3}
              alt="Hotel view 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm h-full">
            <img
              src={img4}
              alt="Hotel view 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-sm h-full">
            <img
              src={img5}
              alt="Hotel view 5"
              className="w-full h-full object-cover"
            />
            {/* شارة الـ +5 */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg gap-1">
              <span>+5</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. شريط التبويبات (Tabs) وزر Reserve a room --- */}
      {/* --- 2. شريط التبويبات (Tabs) وزر Reserve a room --- */}
      {/* --- 2. شريط التبويبات (Tabs) وزر Reserve a room --- */}
      <div className="max-w-7xl mx-auto px-6 mt-8 border-b border-gray-200 relative">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
          {/* التبويبات */}
          <div className="flex items-center gap-8 text-sm md:text-base font-medium text-gray-500">
            {[
              { id: "overview", label: "Overview", ref: overviewRef },
              { id: "rooms", label: "Rooms", ref: roomsRef },
              { id: "location", label: "Location", ref: locationRef },
              { id: "reviews", label: "Reviews", ref: reviewsRef },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                aria-label="okay"
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id, tab.ref)}
                  className={`pb-3 relative cursor-pointer transition-colors group ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {t(tab.label)}

                  {/* الخط الأزرق المستقيم والمنطبق تماماً على الخط الرمادي */}
                  <span
                    className={`absolute -bottom-[1px] left-0 w-full h-[1.5px] bg-blue-600 transition-all duration-200 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-x-150"
                        : "opacity-0 scale-x-90 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* زر الحجز الرئيسي - مرفوع بالضبط 6px عن الخط الرمادي */}
          <button
          aria-label="okay"
            onClick={() => setIsModalOpen(true)}
            style={{ padding: "8px 12px", borderRadius: "6px" }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 mb-[6px] rounded-xl shadow-xs transition-all text-sm cursor-pointer"
          >
            {t("Reserve a room")}
          </button>
        </div>
      </div>

      {/* --- 3. قسم Overview الرئيسي (معلومات الفندق + المميزات + الخريطة) --- */}
      <div
        ref={overviewRef}
        className="max-w-7xl mx-auto px-6 mt-10 space-y-10"
      >
        {/* اسم الفندق والتقييم */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t("My Cloud Transit Hotel")}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <span className="font-semibold">4.5</span>
            <StarIcon className="text-amber-400 text-base" />
          </div>
          <p className="text-sm text-gray-500">4.2/5 {t("Very Good")}</p>
          <p className="text-xs text-gray-400 mt-1">
            {t("Guests rated this property 4.0/5 for cleanliness.")}
          </p>
        </div>

        {/* قسم المميزات (Features) والخريطة (Location) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* الميزات (Features) */}
          {/* الميزات (Features) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              {t("Features")}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <WifiIcon className="text-blue-500 text-base" />{" "}
                {t("Free WiFi")}
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-blue-500 text-base" />{" "}
                {t("Housekeeping")}
              </div>
              <div className="flex items-center gap-3">
                <PetsIcon className="text-blue-500 text-base" />{" "}
                {t("Pet friendly")}
              </div>

              <div className="flex items-center gap-3">
                <AcUnitIcon className="text-blue-500 text-base" />{" "}
                {t("Air conditioning")}
              </div>
              <div className="flex items-center gap-3">
                <SupportAgentIcon className="text-blue-500 text-base" />{" "}
                {t("24/7 front desk")}
              </div>
              <div className="flex items-center gap-3">
                <RestaurantIcon className="text-blue-500 text-base" />{" "}
                {t("Breakfast available")}
              </div>

              <div className="flex items-center gap-3">
                <WifiIcon className="text-blue-500 text-base" />{" "}
                {t("Free WiFi")}
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-blue-500 text-base" />{" "}
                {t("Housekeeping")}
              </div>
              <div className="flex items-center gap-3">
                <PetsIcon className="text-blue-500 text-base" />{" "}
                {t("Pet friendly")}
              </div>

              <div className="flex items-center gap-3">
                <AcUnitIcon className="text-blue-500 text-base" />{" "}
                {t("Air conditioning")}
              </div>
              <div className="flex items-center gap-3">
                <SupportAgentIcon className="text-blue-500 text-base" />{" "}
                {t("24/7 front desk")}
              </div>
              <div className="flex items-center gap-3">
                <RestaurantIcon className="text-blue-500 text-base" />{" "}
                {t("Breakfast available")}
              </div>
            </div>
          </div>

          {/* الخريطة المصغرة (Location Box) */}
          <div
            style={{ width: "555px" }}
            className="lg:col-span-5  p-4 rounded-[6px] "
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {t("Location")}
            </h3>
            <div className="w-full h-[180px] rounded-[6px] overflow-hidden bg-gray-200">
              <iframe
                title="Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.35338166542!2d8.5682852!3d50.051877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0be3e8e2c2f7%3A0xc3b8a34b22dbf9e!2sFrankfurt%20Airport!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                className="w-full h-full border-0 rounded-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="text-slate-400 max-w-[70%] leading-tight text-[11px] pt-3">
                {t(
                  "Hotel_Address",
                  "Terminal 1 / Gate z 25, frankfurt am Main/ Airport, Frankfurt, Hessen, 60549",
                )}
              </p>
              <a
                href="#map"
                className="text-xs text-blue-600 font-semibold mt-1 inline-block hover:underline"
              >
                {t("View in a map")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* --- المودال المطلوب عند الضغط على Reserve a room --- */}
      {/* --- Modal a para iti Reserve a room --- */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2870FB33] backdrop-blur-l transition-all duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full  p-2 max-w-[460px] rounded-[8px] shadow-xl overflow-hidden relative max-h-[90vh] flex flex-col my-auto border border-gray-100 text-left rtl:text-right"
          >
            {/* Header ken buton nga X */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 ">
              <h3 className="text-base font-bold text-gray-900">
                {t("Reserve")}
              </h3>
              <button
              aria-label="okay"
                onClick={() => setIsModalOpen(false)}
                className="w-6 h-6 rounded-full bg-[#E0F2FE] text-[#0284C7] hover:bg-sky-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <CloseIcon sx={{ fontSize: 14 }} />
              </button>
            </div>

            {/* Content a mabalin nga i-scroll */}
            <div
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#e2e8f0 transparent",
              }}
              className="px-2 py-4 overflow-y-auto space-y-4 text-left rtl:text-right [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {/* Larawan ti kuarto ken pakaammo */}
              <div className="space-y-2">
                <div className="w-full h-32 rounded-[4px] overflow-hidden shadow-xs">
                  <img
                    src={mainImg}
                    alt="Room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-xs leading-snug">
                  {t("Economy Double Room, 1 Double Bed, Non Smoking")}
                </h4>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-normal">
                  <span className="flex items-center gap-1">
                    <RoundedCornerIcon
                      style={{ color: "#26BBFD", fontSize: 13 }}
                    />
                    {t("108 sq ft")}
                  </span>
                  <span className="flex items-center gap-1">
                    <PeopleIcon style={{ color: "#26BBFD", fontSize: 13 }} />
                    {t("Sleeps 2")}
                  </span>
                  <span className="flex items-center gap-1">
                    <HotelIcon style={{ color: "#26BBFD", fontSize: 13 }} />
                    {t("1 Double Bed")}
                  </span>
                </div>
              </div>

              {/* Room Amenities */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-gray-900 text-xs">
                  {t("Room Amenities")}
                </h5>
                <div className="grid grid-cols-3 gap-y-2 text-[10px] text-gray-500 font-normal">
                  <div className="flex items-center gap-1.5">
                    <WifiIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("Free WiFi")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CleaningServicesIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("Housekeeping")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PetsIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("Pet friendly")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AcUnitIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("Air conditioning")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <SupportAgentIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("24/7 front desk")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RestaurantIcon
                      sx={{ fontSize: 13 }}
                      className="text-[#26BBFD]"
                    />
                    <span>{t("Breakfast available")}</span>
                  </div>
                </div>
              </div>

              {/* Card para iti Date ken Dadduma pa */}
              <div className="bg-[#E0F7FE]/60 p-3.5 rounded-xl border border-sky-100 space-y-1.5">
                <div className="grid grid-cols-2 text-[10px] text-gray-400 font-medium">
                  <span>{t("Check In - Check Out")}</span>
                  <span>{t("Country")}</span>
                </div>
                <div className="grid grid-cols-2 text-xs font-bold text-gray-800">
                  <span>15-03 / 22-04</span>
                  <span>{t("France")}</span>
                </div>

                <div className="border-b border-dashed border-[#26BBFD]/40 my-1.5"></div>

                <div className="grid grid-cols-2 text-[10px] text-gray-700 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="text-[#26BBFD]">👤</span> 8 {t("Adults")}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[#26BBFD]">👶</span> 3 {t("Children")}
                  </span>
                </div>
              </div>

              {/* Extras */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-gray-900 text-xs">
                  {t("Extras")}
                </h5>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="extra"
                        checked={selectedExtra === "none"}
                        onChange={() => setSelectedExtra("none")}
                        className="accent-[#26BBFD] w-3.5 h-3.5"
                      />
                      <span className="text-gray-700 text-xs font-medium">
                        {t("No extras")}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">+$0</span>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="extra"
                        checked={selectedExtra === "breakfast"}
                        onChange={() => setSelectedExtra("breakfast")}
                        className="accent-[#26BBFD] w-3.5 h-3.5"
                      />
                      <span className="text-gray-700 text-xs font-medium">
                        {t("Breakfast buffet")}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">+$15</span>
                  </label>
                </div>
              </div>

              {/* Price details */}
              <div className="space-y-1.5 text-xs bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100">
                <h5 className="font-bold text-gray-900 text-xs mb-1.5">
                  {t("Price details")}
                </h5>

                <div className="flex justify-between text-gray-600">
                  <span>{t("Room")}</span>
                  <span className="font-semibold text-blue-500">960.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t("Fully refundable")}</span>
                  <span className="font-semibold text-blue-500">30.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>
                    {t("Extras")}{" "}
                    <span className="text-[10px] text-blue-400">
                      {t("Breakfast buffet")}
                    </span>
                  </span>
                  <span className="font-semibold text-blue-500">25.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t("Taxes")}</span>
                  <span className="font-semibold text-blue-500">30.00</span>
                </div>

                <div className="border-t border-slate-200/60 my-1.5 pt-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-gray-900">
                    <span>{t("Total (incl. VAT)")}</span>
                    <span className="text-[#26BBFD] font-extrabold text-sm">
                      1698.00 SAR
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {t("includes taxes & fees")}
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-gray-900 text-xs">
                  {t("Choose Payment Method")}
                </h5>
                <div className="space-y-1.5">
                  <label
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "mastercard"
                        ? "border-sky-200 bg-sky-50/20"
                        : "border-slate-100 bg-[#F8FAFC]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "mastercard"}
                        onChange={() => setPaymentMethod("mastercard")}
                        className="accent-[#26BBFD] w-3.5 h-3.5"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {t("Master Card")}
                      </span>
                    </div>
                    <div className="flex items-center -space-x-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-400 opacity-90"></div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "mada"
                        ? "border-sky-200 bg-sky-50/20"
                        : "border-slate-100 bg-[#F8FAFC]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "mada"}
                        onChange={() => setPaymentMethod("mada")}
                        className="accent-[#26BBFD] w-3.5 h-3.5"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {t("Mada")}
                      </span>
                    </div>
                    <span className="text-[9px] font-extrabold tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                      mada
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "visa"
                        ? "border-sky-200 bg-sky-50/20"
                        : "border-slate-100 bg-[#F8FAFC]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "visa"}
                        onChange={() => setPaymentMethod("visa")}
                        className="accent-[#26BBFD] w-3.5 h-3.5"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {t("Visa")}
                      </span>
                    </div>
                    <span className="text-xs font-black italic tracking-widest text-blue-900">
                      VISA
                    </span>
                  </label>
                </div>
              </div>

              {/* Buton a Reserve */}
              <button
              aria-label="okay"
                onClick={() => {
                  alert("Reserve Done");
                  setIsModalOpen(false);
                }}
                className="w-full bg-[#26BBFD] hover:bg-sky-500 active:scale-[0.99] text-white font-bold py-3 rounded-xl shadow-xs transition-all text-xs cursor-pointer mt-2"
              >
                {t("Reserve")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* rooms */}
      <div ref={roomsRef} className="max-w-7xl mx-auto px-6 pt-10 space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {t("Choose your room")}
        </h2>

        {/* مربعات التواريخ الثلاثة في الأعلى */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative"
        >
          {/* 1. مربع تسجيل الوصول Check In */}
          <div className="relative">
            <div
              onClick={() =>
                setActiveDatePicker(
                  activeDatePicker === "checkIn" ? null : "checkIn",
                )
              }
              className={`bg-white border rounded-[6px] p-3 flex items-center justify-between shadow-xs cursor-pointer transition-all ${
                activeDatePicker === "checkIn"
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-blue-200/60 hover:border-blue-400"
              }`}
            >
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-[11px] text-gray-400">
                  {t("Check in:")}
                </span>
                <span className="text-xs font-bold text-blue-600">
                  {t(dates.checkIn)}
                </span>
              </div>
              <KeyboardArrowDownIcon className="text-gray-400 text-sm" />
            </div>

            {/* القائمة المنسدلة للتقويم (Check In) */}
            {activeDatePicker === "checkIn" && (
              <div className="absolute top-full start-0 mt-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 w-72 text-left rtl:text-right">
                <div className="flex justify-between items-center mb-3 border-b pb-2">
                  <span className="text-xs font-bold text-gray-700">
                    {t("Select Check-in Date")}
                  </span>
                  <button
                  aria-label="okay"
                    onClick={() => setActiveDatePicker(null)}
                    className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-xl p-2.5 text-xs text-gray-800 outline-none focus:border-blue-500"
                  onChange={(e) => {
                    if (e.target.value) {
                      const d = new Date(e.target.value);
                      const formatted = d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                      setDates((prev) => ({ ...prev, checkIn: formatted }));
                      setActiveDatePicker(null);
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* 2. مربع المغادرة Check Out */}
          {/* 2. مربع المغادرة Check Out */}
          <div className="relative w-full">
            <div
              onClick={() =>
                setActiveDatePicker(
                  activeDatePicker === "checkOut" ? null : "checkOut",
                )
              }
              className={`w-full bg-white border rounded-[6px] p-3 flex items-center justify-between shadow-xs cursor-pointer transition-all ${
                activeDatePicker === "checkOut"
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-blue-200/60 hover:border-blue-400"
              }`}
            >
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-[11px] text-gray-400">
                  {t("Check out:")}
                </span>
                <span className="text-xs font-bold text-blue-600">
                  {t(dates.checkOut)}
                </span>
              </div>
              <KeyboardArrowDownIcon className="text-gray-400 text-sm shrink-0" />
            </div>

            {/* القائمة المنسدلة للتقويم (Check Out) */}
            {activeDatePicker === "checkOut" && (
              <div className="absolute top-full start-0 mt-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 w-72 text-left rtl:text-right">
                <div className="flex justify-between items-center mb-3 border-b pb-2">
                  <span className="text-xs font-bold text-gray-700">
                    {t("Select Check-out Date")}
                  </span>
                  <button
                  aria-label="okay"
                    onClick={() => setActiveDatePicker(null)}
                    className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-xl p-2.5 text-xs text-gray-800 outline-none focus:border-blue-500"
                  onChange={(e) => {
                    if (e.target.value) {
                      const d = new Date(e.target.value);
                      const formatted = d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                      setDates((prev) => ({ ...prev, checkOut: formatted }));
                      setActiveDatePicker(null);
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* 3. مربع عدد الضيوف / الغرف (Guests) - مطابق 100% لمربعات التواريخ */}
          <div className="relative w-full">
            <div
              onClick={() =>
                setActiveDatePicker(
                  activeDatePicker === "guests" ? null : "guests",
                )
              }
              className={`w-full bg-white border rounded-[6px] p-4 flex items-center justify-between shadow-xs cursor-pointer transition-all ${
                activeDatePicker === "guests"
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-blue-200/60 hover:border-blue-400"
              }`}
            >
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-[11px] text-gray-400">
                  {t("Guests:")}
                </span>
                <span className="text-xs font-bold text-blue-600 truncate">
                  {t(dates.guests)}
                </span>
              </div>
              <KeyboardArrowDownIcon className="text-gray-400 text-sm shrink-0" />
            </div>

            {/* خيارات سريعة لاختيار الضيوف بنفس عرض المربع (w-full) */}
            {activeDatePicker === "guests" && (
              <div className="absolute top-full start-0 mt-2 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 w-full sm:w-72 space-y-2 text-left rtl:text-right">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-xs font-bold text-gray-700">
                    {t("Select Guests")}
                  </span>
                  <button
                  aria-label="okay"
                    onClick={() => setActiveDatePicker(null)}
                    className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                {[
                  "1 Adult",
                  "2 Adults",
                  "2 Adults, 1 Child",
                  "family (4+)",
                ].map((opt, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setDates((prev) => ({ ...prev, guests: opt }));
                      setActiveDatePicker(null);
                    }}
                    className="p-2 text-xs text-gray-700 hover:bg-sky-50 rounded-xl cursor-pointer transition-colors"
                  >
                    {t(opt)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* شبكة البطاقات */}
        {/* شبكة البطاقات (Choose your room) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-2 flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div className="space-y-2.5">
                <div className="w-full h-32 rounded-[4px] overflow-hidden shadow-xs bg-gray-100">
                  <img
                    src={room.img}
                    alt="Room"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">
                  {t(`${room.title}`)}
                </h3>

                <div className="space-y-1 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <RoundedCornerIcon
                      style={{ color: "gray", fontSize: 14 }}
                    />{" "}
                    {t("108 sq ft")}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PeopleIcon style={{ color: "gray", fontSize: 14 }} />{" "}
                    {t("Sleeps 2")}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HotelIcon style={{ color: "gray", fontSize: 14 }} />{" "}
                    {t("1 Double Bed")}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium pt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  {t("Fully refundable (Before Sat, Oct 22)")}
                </div>

                <div>
                  <button
                  aria-label="okay"
                   className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer">
                    {t("More details")}
                  </button>
                </div>
              </div>

              <div className="pt-3 mb-3 flex items-center justify-between  ">
                <div>
                  <div className="text-sm font-extrabold text-[#26bbfd]">
                    {room.price}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {t(`${room.total}`)}
                  </div>
                </div>
                <button
                aria-label="okay"
                  style={{ borderRadius: "6px", padding: "8px 12px" }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#2870FB] hover:bg-blue-700 text-white font-medium px-8 py-1.5  shadow-xs transition-all text-xs cursor-pointer"
                >
                  {t("Reserve")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* location */}
      {/* location */}
      <div
        ref={locationRef}
        className="max-w-7xl mx-auto px-6 mt-16 pt-10 space-y-14 text-left rtl:text-right font-sans"
      >
        {/* القسم العلوي: About this area + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* About this area */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-800">
              {t("About this area")}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
              {t(
                "About_Area_Description",
                "Located in Frankfurt Airport Area neighborhood, MY CLOUD Transit Hotel is connected to a rail/subway station. Neues Theater Höchst and Jahrhunderthalle are cultural highlights, and some of the area's landmarks include Hoechst Castle and Henninger Turm. Looking to enjoy an event or a game while in town? See what's happening at Deutsche Bank Park or Fraport Arena.",
              )}
            </p>
          </div>

          {/* Map + Address + View in map */}
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-lg font-bold text-slate-800">{t("Map")}</h2>
            <div className="w-full h-[190px] rounded-[6px] overflow-hidden border border-slate-100 shadow-xs bg-slate-100">
              <iframe
                title="Hotel Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.35338166542!2d8.5682852!3d50.051877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0be3e8e2c2f7%3A0xc3b8a34b22dbf9e!2sFrankfurt%20Airport!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                className="w-full h-full border-0 rounded-[6px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* العنوان ورابط الخريطة تحته */}
            <div className="flex items-start justify-between pt-1 text-xs">
              <p className="text-slate-400 max-w-[70%] leading-tight text-[11px]">
                {t(
                  "Hotel_Address",
                  "Terminal 1 / Gate z 25, frankfurt am Main/ Airport, Frankfurt, Hessen, 60549",
                )}
              </p>
              <a
                href="#map"
                className="text-blue-600 font-bold hover:underline shrink-0 text-[11px]"
              >
                {t("View in a map")}
              </a>
            </div>
          </div>
        </div>

        {/* القسم السفلي: الأماكن القريبة، المطاعم، والمواصلات مع مسافات واسعة ومدروسة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-8 ">
          {/* 1. What's nearby */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800">
              {t("What's nearby")}
            </h3>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Lufthansa Flight Training Center")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt City Forest")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt (FRA-Frankfurt Intl.)")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">{t("Gateway Gardens")}</span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Restaurants */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800">
              {t("Restaurants")}
            </h3>
            <div className="space-y-4 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <RestaurantOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Lufthansa Flight Training Center")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <RestaurantOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt City Forest")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <RestaurantOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt (FRA-Frankfurt Intl.)")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <RestaurantOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">{t("Gateway Gardens")}</span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Getting around */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800">
              {t("Getting around")}
            </h3>
            <div className="space-y-4 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <DirectionsSubwayOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Lufthansa Flight Training Center")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <DirectionsSubwayOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt City Forest")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <DirectionsSubwayOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="text-slate-600 shrink-0"
                  />
                  <span className="leading-snug">
                    {t("Frankfurt (FRA-Frankfurt Intl.)")}
                  </span>
                </span>
                <span className="text-slate-600 text-[11px] shrink-0 ms-3">
                  {t("5 min drive")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews section */}
      {/* reviews section */}
      {/* --- قسم التقييمات (Reviews) --- */}
      <div
        ref={reviewsRef}
        className="max-w-7xl mx-auto px-0 mt-20 pt-10 space-y-6 text-left rtl:text-right overflow-x-hidden"
      >
        <h2 className="text-xl font-bold text-gray-900">{t("Reviews")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* القسم الأول (قائمة التقييمات - 7 أعمدة) */}
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <div
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#e2e8f0 transparent",
              }}
              className="space-y-4 max-h-[480px] overflow-y-auto overflow-x-hidden px-3 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400"
            >
              {reviewsList.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white border-b border-gray-100 pb-5 space-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">
                      {t(`${rev.name}`)}
                    </span>

                    {/* إعادة dir="ltr" ومسافة مريحة gap-2 لكي لا تلتصق النجوم ببعضها ويتصلح شكلها بالعربي */}
                    <div className="flex items-center gap-2" dir="ltr">
                      <span className="text-xs font-bold text-slate-800">
                        {rev.rating}
                      </span>
                      <Rating
                        value={Number(rev.rating)}
                        precision={0.5}
                        readOnly
                        size="small"
                        icon={
                          <StarIcon
                            fontSize="inherit"
                            style={{ color: "#f59e0b" }}
                          />
                        }
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.3 }}
                            fontSize="inherit"
                          />
                        }
                        sx={{ fontSize: "16px" }}
                      />
                    </div>
                  </div>

                  {/* ترجمة نص الملاحظة (Lorem) إلى العربية بأسلوب صحيح */}
                  <p
  className="text-xs text-gray-500 leading-relaxed break-words text-left rtl:text-right"
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
>
  {i18n.language === "ar" && rev.comment.includes("Lorem ipsum")
    ? "هذا النص هو مثال لنص وهمي يُستخدم في التصميم والطباعة. يمكن استبداله بنص آخر في هذا المكان."
    : t(rev.comment)}
</p>
                </div>
              ))}
            </div>
          </div>

          {/* القسم الثاني (نموذج كتابة التقييم - 5 أعمدة) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm space-y-5 order-1 lg:order-2 text-left rtl:text-right">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-900">
                {t("Add Review")}
              </h3>
              <p className="text-xs text-gray-400">
                {t(
                  "Please add review, this will help us to improve your experience",
                )}
              </p>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              {/* النجوم التفاعلية */}
              <div className="flex items-center justify-start rtl:justify-end">
                <Rating
                  name="half-rating-interactive"
                  value={userRating}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    if (newValue !== null) setUserRating(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverRating(newHover);
                  }}
                  size="large"
                  icon={
                    <StarIcon fontSize="inherit" style={{ color: "#f59e0b" }} />
                  }
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />
                  }
                  sx={{
                    fontSize: "32px",
                  }}
                />
              </div>

              {/* حقل إدخال التعليق */}
              <div>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={t("Type Here..")}
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                  className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-xs outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all resize-none shadow-xs placeholder-gray-300 text-slate-800 text-left rtl:text-right"
                  rows="4"
                  required
                />
              </div>

              {/* زر الإرسال */}
              <button
              aria-label="okay"
                type="submit"
                className="w-full bg-[#26BBFD] hover:bg-sky-500 text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                {t("Add Review")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
