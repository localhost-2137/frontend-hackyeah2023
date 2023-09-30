import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SurveyLandingPage() {
    const { t } = useTranslation();

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <p className="text-center text-4xl">{t("surveyDescription")}</p>
      </motion.div>
    );
}