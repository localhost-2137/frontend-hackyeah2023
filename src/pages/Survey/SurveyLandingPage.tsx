import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button";

export default function SurveyLandingPage() {
    const { t } = useTranslation();

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center h-screen px-4"
      >
        <p className="text-center text-4xl">{t("surveyDescription")}</p>
        <Button isLink={true} to="/survey/1" className="mt-10">{t("surveyLandingPageButton")}</Button>
      </motion.div>
    );
}