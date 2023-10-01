import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Map from "../components/Map";
import {useTranslation} from "react-i18next";

const University = () => {

    const {t} = useTranslation();
    const [university, setUniversity] = useState<any>([])
    const {id} = useParams()

    useEffect(() => {

        const getData = async () => {
            const response = await fetch("../src/data/universities.json")
            const data = await response.json()

            if (response.ok) {
                const result = data.filter(university => university.id == id)
                console.log(result)
                setUniversity(result)
            }
        }

        getData()

    }, [])

    return (
        <>
            {university.map(university => {
                return (
                    <div key={university.id} className="py-6 max-w-[1300px] w-full flex flex-col gap-6">
                        <h2 className="text-2xl">{university.name}</h2>
                        <p>{t("university-city")}: {university.city}</p>
                        <p>{t("university-address")}: {university.address}</p>
                        <p>{t("university-rank")}: {university.rank}</p>

                        <p>{t("university-students")}: {university.number_students}</p>
                        <p>{t("university-academic")}: {university.academic ? "yes" : "no"}</p>
                        <p>{t("university-subjects")}: {university.subjects}</p>

                        <Map lat={university.lat} lng={university.lng}/>
                    </div>
                )
            })
            }
        </>
    )
}

export default University