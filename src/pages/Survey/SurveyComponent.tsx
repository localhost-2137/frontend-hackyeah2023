import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {Link, useParams} from "react-router-dom";
import Button from "../../components/ui/Button";
import {useEffect, useState} from "react";
import {surveyAnswersAtom} from "../../logic/atoms";
import {useAtom} from "jotai";
import {getAnswersByUserInputFromSurvey} from "../../logic/backend";
import {ClockFill, SignpostSplitFill} from "react-bootstrap-icons";
import {Triangle} from "react-loader-spinner";

export default function SurveyComponent() {
    const [surveyAnswers, setSurveyAnswers] = useAtom(surveyAnswersAtom);
    const [results, setResults] = useState<any>([]);
    const id = useParams().id;
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    const [buttons, setButtons] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!id) return;

        setButtons([]);
        if (id === "1" && surveyAnswers.length > 1) {
            setSurveyAnswers([]);
        }

        const fetchData = async (latitude: any, longitude: any) => {
            setIsLoading(true);
            const answers = await getAnswersByUserInputFromSurvey({
                lat: latitude || "50.0647",
                lng: longitude || "19.9449799",
                questions: surveyAnswers,
            });
            setResults(answers);
            if (answers) setIsLoading(false);
        };

        if (id === "16") {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude} = position.coords;
                        setIsLoading(true);
                        fetchData(latitude, longitude);
                    },
                    (error) => {
                        alert("Couldn't get your location: " + error.message);
                        setIsLoading(true);
                        fetchData(undefined, undefined);
                    }
                );
            } else {
                alert("Geolocation is not supported in this browser");
                setIsLoading(true);
                fetchData(undefined, undefined);
            }
        }

        for (let i = 1; i <= 3; i++) {
            if (t(`survey${id}Option${i}`) !== `survey${id}Option${i}`) {
                setButtons((buttons: any) => [...buttons, t(`survey${id}Option${i}`)]);
            }
        }
    }, [id, t]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={`flex flex-col items-center ${
                id !== "16" && "justify-center"
            } mt-16 mb-16 min-h-screen px-4 gap-32`}
        >
            <Button isLink={true} variant="yellow" to="/" className="absolute top-4 left-4">
                {t("back")}
            </Button>
            <p className="text-center max-[600px]:text-2xl min-[1000px]:text-4xl max-[600px]:max-w-[100%] min-[1200px]:max-w-[60%]">
                {t(`survey${id}Title`)}
            </p>
            <div
                className={`flex flex-col ${
                    id !== "16" && "w-[40%] sm:w-[20%]"
                } justify-center gap-4 w-[100%]`}
            >
                {!(id === "16" && results) ? (
                    buttons.map((button: any, i: any) => (
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
                                        [
                                            `${t(`survey${+(id || -10)}Title`)}`,
                                            t(`survey${+(id || -10)}Option${i + 1}`),
                                        ],
                                    ]);
                                    changeLanguage("pl");
                                } else {
                                    setSurveyAnswers((answers: any) => [
                                        ...answers,
                                        [
                                            `${t(`survey${+(id || -10)}Title`)}`,
                                            t(`survey${+(id || -10)}Option${i + 1}`),
                                        ],
                                    ]);
                                }
                            }}
                        >
                            {button}
                        </Button>
                    ))
                ) : isLoading ? (
                    <Triangle
                        height="160"
                        width="160"
                        color="#E5E3CF"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass="w-[100%] flex justify-center items-center"
                        visible={true}
                    />
                ) : (
                    results.map((result: any, i: any) => {
                        return (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 0.15 * i}}}
                                exit={{opacity: 0}}
                                key={i}
                                className="p-4 border-2 border-dark-300 hover:bg-dark-500 rounded-xl transition-colors duration-300 max-[800px]:w-[90%] max-[800px]:items-center max-[800px]:mx-auto max-[800px]:text-center overflow-x-hidden"
                            >
                                <Link to={`/university/${result.id}`}>
                                    <p className="text-xl mb-4">{result.name}</p>
                                    <div className="flex flex-row flex-wrap gap-2  mb-4">
                                        {result.subjects &&
                                            result.subjects.map((subject: any, i: number) => {
                                                return (
                                                    <p
                                                        className="background bg-dark-300 px-4 py-2 rounded-full"
                                                        key={i}
                                                    >
                                                        {subject}
                                                    </p>
                                                );
                                            })}
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <ClockFill/>
                                        {`${Math.ceil(result.time / 60)} minut`}{" "}
                                        <SignpostSplitFill/>
                                        {`${Math.round(result.distance / 1000)} km`}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </motion.div>
    );
}
