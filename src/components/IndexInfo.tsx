import { useTranslation } from "react-i18next";
import Button from "./ui/Button";

const IndexInfo = () => {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col-reverse md:flex-row gap-32 p-10 justify-between items-center text-center text-lg mt-10 max h-full">
            <img src="/logo.png" alt="EduSearch Logo" className="w-96 md:hidden mb-5" />
            <img src="/logo.png" alt="EduSearch Logo" className="w-96 hidden md:block" />
            <div className="flex flex-col w-128 gap-5 ml-10">
                <h1 className="text-5xl">EduSearch</h1>
                <p className="max-w-[400px] text-2xl">Feeling indecisive? Don't worry, we're here to help you find your path. Let's explore your passions and goals together for a confident educational journey. </p>
                <p className="max-w-[400px]">Click this button and take short survey, which would help you decide.</p>
                <Button variant="green" isLink={true} to="/survey">{t("surveyLandingPageButton")}</Button>
            </div>

        </main>

    )
}

export default IndexInfo