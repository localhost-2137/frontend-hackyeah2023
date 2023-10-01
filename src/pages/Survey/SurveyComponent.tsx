import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
import { surveyAnswersAtom } from "../../logic/atoms";
import { useAtom } from "jotai";

export default function SurveyComponent() {
  const [surveyAnswers, setSurveyAnswers] = useAtom(surveyAnswersAtom);
  const [location, setLocation] = useState<any>(null);
  const id = useParams().id;
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [buttons, setButtons] = useState<any>([]);

  useEffect(() => {
    if (!id) return;

    setButtons([]);
    if (id === "1" && surveyAnswers.length > 1) {
      setSurveyAnswers([]);
    }

    if (id === "16") {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude + " " + longitude );
          setLocation({ latitude, longitude });
        });
      } else {
        alert("Couldn't get your location");
      }
      console.log(surveyAnswers);
    } 
    if (id === "16" && location) {
      //TODO fetch when backend ready
    }

    for (let i = 1; i <= 3; i++) {
      if (t(`survey${id}Option${i}`) !== `survey${id}Option${i}`) {
        setButtons((buttons: any) => [...buttons, t(`survey${id}Option${i}`)]);
      }
    }
  }, [id, t]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen px-4 gap-32"
    >
      <Link to="/" className="absolute top-4 left-4">
        {t("back")}
      </Link>
      <p className="text-center max-[600px]:text-2xl min-[1000px]:text-4xl max-[600px]:max-w-[100%] min-[1200px]:max-w-[60%]">
        {t(`survey${id}Title`)}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 min-[1000px]:w-[20%] max-[600px]:w-[100%]">
        {buttons.map((button: any, i: any) => (
          <Button
            key={i}
            isLink={true}
            variant={i + 1 === 1 ? "green" : i + 1 === 2 ? "red" : "yellow"}
            className="w-full"
            to={`/survey/${t(`survey${id}Option${i + 1}Redirect`)}`}
            onClick={() => {
              if (i18n.language === "pl") {
                changeLanguage("en");
                setSurveyAnswers((answers: any) => [
                  ...answers,
                  {
                    question: t(`survey${+(id || -10)}Title`),
                    userAnswer: t(`survey${+(id || -10)}Option${i + 1}`),
                  },
                ]);
                changeLanguage("pl");
              } else {
                setSurveyAnswers((answers: any) => [
                  ...answers,
                  {
                    question: t(`survey${+(id || -10)}Title`),
                    userAnswer: t(`survey${+(id || -10)}Option${i + 1}`),
                  },
                ]);
              }
            }}
          >
            {button}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
