import {useTranslation} from "react-i18next";

const IndexInfo = () => {
    const {t} = useTranslation();

    return (
        <main className="h-full flex gap-4 flex-col justify-center items-center text-center text-lg">
            <h2 className="text-3xl">EduSearch</h2>
            <p className="max-w-[400px]">Feeling indecisive? Don't worry, we're here to help you find your path. Let's
                explore your passions and
                goals together for a confident educational journey. </p>
            <p className="max-w-[400px]">Click this button and take short survey, which would help you decide.</p>
        </main>
    )
}

export default IndexInfo