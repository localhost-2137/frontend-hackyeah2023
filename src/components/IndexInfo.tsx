import {useTranslation} from "react-i18next";

const IndexInfo = () => {
    const {t} = useTranslation();

    return (
        <section className="translate-y-[-10%] h-full flex gap-4 flex-col justify-center items-center text-center text-lg">
            <h2 className="text-3xl">EduSearch</h2>
            <p className="max-w-[400px]">{t("index-info-1")}</p>
            <p className="max-w-[400px]">{t("index-info-2")}</p>
        </section>
    )
}

export default IndexInfo