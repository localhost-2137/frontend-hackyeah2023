import {useTranslation} from "react-i18next";
import Button from "./ui/Button";
import {motion} from "framer-motion";
import UniversitiesMap from "./maps/UniversitiesMap.tsx";
import {useEffect, useState} from "react";
import {getAllUniversitiesForMap} from "../logic/backend.ts";

const IndexInfo = () => {
    const {t} = useTranslation();

    const [universities, setUniversities] = useState<any>([]);

    useEffect(() => {

        const getData = async () => {
            const data = await getAllUniversitiesForMap()
            console.log(data)
            if (data) setUniversities(data)
        }

        getData()

    }, []);

    return (
        <motion.div>
            <main>
                <section
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
                    <div className="flex flex-col w-128 gap-5">
                        <h1 className="text-5xl">EduSearch</h1>
                        <p className="max-w-[400px] text-xl">{t("index-info-1")}</p>
                        <p className="max-w-[400px] text-xl">{t("index-info-2")}</p>
                        <Button variant="green" isLink={true} to="/survey">
                            {t("surveyLandingPageButton")}
                        </Button>
                        <Button variant="red" isLink={true} to="/search">
                            {t("searchManually")}
                        </Button>
                    </div>
                </section>
                <section className="p-6">
                    <UniversitiesMap universities={universities}/>
                </section>
            </main>

        </motion.div>
    );
}

export default IndexInfo;