import {useTranslation} from "react-i18next";
import Button from "./ui/Button";
import UniversitiesMap from "./maps/UniversitiesMap.tsx";

const IndexInfo = () => {
    const {t} = useTranslation();

    return (
        <main
            className="flex flex-col-reverse md:flex-row gap-32 p-10 justify-between items-center text-center text-lg max h-full">
            <img
                src="/logo.png"
                alt="EduSearch Logo"
                className="w-96 md:hidden mb-5"
            />
            <img
                src="/logo.png"
                alt="EduSearch Logo"
                className="w-96 hidden md:block"
            />
            <div className="flex flex-col w-128 gap-5 ml-10">
                <h1 className="text-5xl">EduSearch</h1>
                <p className="max-w-[400px] text-xl">{t("index-info-1")}</p>
                <p className="max-w-[400px] text-xl">{t("index-info-2")}</p>
                <Button variant="green" isLink={true} to="/survey">
                    {t("surveyLandingPageButton")}
                </Button>
            </div>
        </main>
    );
}

export default IndexInfo;