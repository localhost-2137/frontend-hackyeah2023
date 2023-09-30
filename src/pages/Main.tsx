import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";

const Main = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <header>
        <h1>EduSearch</h1>
      </header>
      <main>
        <LanguageSwitcher />
        <h1>{t('welcome')}</h1></main>
    </motion.div>
  );
}

export default Main