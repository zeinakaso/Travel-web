import { useState } from "react";
import {
  Menu,
  MenuItem,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import logoImg from "../assets/logo (1).webp";
import p2 from "../assets/p2.webp";

import { useNavigate, Link } from "react-router-dom";

// translation
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    handleClose();
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-4 sm:px-8 py-3 sm:py-5 flex items-center justify-between bg-transparent">
      {/* 1. الشعار (Logo) */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img
          src={logoImg}
          alt="Travel Tent Logo"
          className="h-6 sm:h-8 w-auto max-w-[130px] sm:max-w-none object-contain mix-blend-multiply opacity-60 transition-all"
        />
      </Link>

      {/* 2. زر القائمة الرئيسي */}
      <div>
        <button
          aria-label="okay"
          onClick={handleClick}
          className="flex items-center justify-center gap-1 bg-[#26bbfd] hover:bg-blue-400 text-white p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
          aria-controls={open ? "profile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonOutlineOutlinedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          <MenuIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
        </button>

        {/* 3. القائمة المنسدلة بالتصميم المطلوب تماماً (أعرض + زر إغلاق X) */}
        <Menu
           style={{marginTop:"25px"}}
          id="profile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          PaperProps={{
  elevation: 4,
  sx: {
    width: { xs: 340, sm: 420 }, // عرض أكبر
    maxWidth: "calc(100vw - 24px)",
    borderRadius: "24px",
    mt: 2.5,
    py: 2,
    backgroundColor: "#ffffff",
    boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.12)",
    border: "1px solid rgba(226, 232, 240, 0.6)",
    position: "relative",
    "& .MuiMenuItem-root": {
      paddingX: 3,
      paddingY: 1.5,
      fontSize: "0.9rem",
      color: "#1E293B",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#f8fafc",
        color: "#26BBFD",
      },
    },
  },
}}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/* زر الإغلاق (X) */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* معلومات المستخدم */}
          <Box className="px-5 py-2 pr-10 flex items-center gap-3.5 mb-1">
            <img src={p2} alt="person" className="h-11 w-11 rounded-full object-cover shadow-xs" />
            <Box className="overflow-hidden">
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#1E293B", fontSize: "0.95rem" }} className="truncate">
                {t("John Dou")}
              </Typography>
              <Typography variant="caption" sx={{ color: "#94A3B8", display: "block", fontSize: "0.8rem" }} className="truncate">
                {t("johndoe@email.com")}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1.5, mx: 3, borderColor: "#E2E8F0" }} />

          {/* عناصر القائمة الرئيسية */}
          <MenuItem onClick={handleClose}>{t("My Requests")}</MenuItem>
          
          <MenuItem onClick={handleClose} className="flex justify-between items-center w-full">
            <span>{t("Notifications")}</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#26BBFD] inline-block ml-2" style={{margin:"5px",marginBottom:"15px"}}></span>
          </MenuItem>

          <MenuItem onClick={() => { handleClose(); navigate("/Hotel"); }}>{t("About")}</MenuItem>
          
          <MenuItem onClick={handleClose}>{t("Contact")}</MenuItem>

          <Divider sx={{ my: 1.5, mx: 3, borderColor: "#E2E8F0" }} />

          <MenuItem onClick={handleClose} sx={{ color: "#64748B !important", fontSize: "0.85rem !important", fontWeight: 500 }}>
            {t("Edit Profile")}
          </MenuItem>

          {/* أزرار اللغة */}
          <div className="px-5 py-2 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 block px-1 mb-1">{t("Language")}</span>
            <div className="grid grid-cols-2 gap-2">
              <button
              aria-label="okay"
                onClick={() => handleLanguageChange("ar")}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  i18n.language === "ar" ? "bg-[#26BBFD] text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                العربية
              </button>
              <button
              aria-label="okay"
                onClick={() => handleLanguageChange("en")}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  i18n.language === "en" ? "bg-[#26BBFD] text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                English
              </button>
            </div>
          </div>

          <MenuItem
            onClick={() => { handleClose(); navigate("/"); }}
            sx={{ color: "#EF4444 !important", fontSize: "0.85rem !important", fontWeight: 600, mt: 1 }}
          >
            {t("Logout")}
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}