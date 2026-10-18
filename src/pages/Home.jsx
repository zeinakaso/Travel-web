import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SearchCard from "./SearchCard";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
// translation
import "../i18n";
import { useTranslation } from "react-i18next";

// --- إعدادات الحركة الاحترافية (Variants) ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // الفارق الزمني الأنيق بين ظهور كل قسم والذي يليه
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 260, // مرونة الارتداد لتكون الحركة طبيعية وحيوية
      damping: 24     // النعومة والتوقف المتوازن
    } 
  },
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full min-h-screen bg-white font-sans overflow-x-hidden"
    >
      <Helmet>
        <title>{t("Home")}</title>
      </Helmet>
      
      {/* --- قسم الهيرو العلوي مع أنيميشن دخول فاخر (Scale + Fade) --- */}
      <motion.section 
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          show: { 
            opacity: 1, 
            scale: 1, 
            transition: { type: "spring", stiffness: 200, damping: 25 } 
          }
        }}
        className="relative w-full h-[658px] overflow-hidden"
      >
        <SearchCard />
      </motion.section>

      {/* --- باقي الأقسام تظهر بتسلسل احترافي عند التمرير (Scroll Reveal) --- */}
      <motion.section 
        variants={itemVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <SectionTwo />
      </motion.section>

      <motion.section 
        variants={itemVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <SectionThree />
      </motion.section>

      <motion.section 
        variants={itemVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <SectionFour />
      </motion.section>
    </motion.div>
  );
}