import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import { useTranslation } from "react-i18next";
import { University as UniversityType } from "../logic/types";
import { getSingleUniversity } from "../logic/backend";

const University = () => {

    const { t } = useTranslation();
    const [university, setUniversity] = useState<any>([])
    const { id } = useParams()

    useEffect(() => {

        const getData = async () => {
            if (!id) return;
            const response = await getSingleUniversity(+id);
            setUniversity(response);
        }

        getData()

    }, [])

    return (
        <>
            {university.map((university: UniversityType) => {
                return (
                    <div key={university.id} className="py-6 max-w-[1300px] w-full flex flex-col gap-6">
                        <h2 className="text-2xl">{university.name}</h2>
                        <p>{t("university-city")}: {university.city}</p>
                        <p>{t("university-address")}: {university.address}</p>
                        <p>{t("university-rank")}: {university.rank}</p>

                        <p>{t("university-students")}: {university.number_students}</p>
                        <p>{t("university-academic")}: {university.academic ? t('yes') : t('no')}</p>
                        <p>{t("university-subjects")}: </p>

                        <Map lat={university.lat} lng={university.lng} />
                    </div>
                )
            })
            }
        </>
    )
}

export default University