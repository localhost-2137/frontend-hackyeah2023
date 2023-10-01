import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Map from "../components/maps/Map.tsx";
import {useTranslation} from "react-i18next";
import {getSingleUniversity} from "../logic/backend";
import en from "../locales/en.json";
import pl from "../locales/pl.json";
import i18n from "../logic/i18n";
import Button from "../components/ui/Button";

const University = () => {
    const {t} = useTranslation();
    const [university, setUniversity] = useState<any>([]);
    const [isFav, setIsFav] = useState<boolean>(false);
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            if (!id) return;
            const response = await getSingleUniversity(+id);
            console.log(response);
            setUniversity(response);
        };

        getData().then(() => {

            const fav = localStorage.getItem("favourites");

            if (fav) {
                const favArray = JSON.parse(fav);
                favArray.forEach((fav: any) => {
                    if (fav.id === university.id) {
                        setIsFav(true)
                    }
                });
            }
        });
    }, [id]);

    const addToFav = () => {
        const fav = localStorage.getItem("favourites");

        if (fav) {
            const favArray = JSON.parse(fav);
            favArray.push(university);
            localStorage.setItem("favourites", JSON.stringify(favArray));
            setIsFav(true);
        } else {
            const favArray = [];
            favArray.push(university);
            console.log(favArray);
            localStorage.setItem("favourites", JSON.stringify(favArray));
            setIsFav(true);
        }
    }

    const deleteFromFav = () => {
        const fav = localStorage.getItem("favourites");

        if (fav) {
            const favArray = JSON.parse(fav);
            const newFavArray = favArray.filter((fav: any) => {
                return fav.id !== university.id;
            });
            localStorage.setItem("favourites", JSON.stringify(newFavArray));
            setIsFav(false);
        }
    }

    return (
        <>
            {university && (
                <div
                    key={university.id}
                    className="py-6 px-6 max-w-[1300px] w-full flex flex-col gap-6"
                >
                    <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-3">
                        <h2 className="text-2xl">{university.name}</h2>
                        <Button type="button" variant="green" isLink={false}
                                onClick={isFav ? deleteFromFav : addToFav}>{
                            isFav ? t("favourites-delete") : t("favourites-add")
                        }</Button>
                    </div>
                    <p>
                        {t("university-city")}: {university.city}
                    </p>
                    <p>
                        {t("university-address")}: {university.address}
                    </p>
                    <p>
                        {t("university-rank")}: {university.rank}
                    </p>

                    <p>
                        {t("university-students")}: {university.number_students}
                    </p>
                    <p>
                        {t("university-academic")}: {university.academic ? t("yes") : t("no")}
                    </p>
                    <div className="flex items-center flex-wrap gap-x-6 gap-y-3">
                        <p>{t("university-subjects")}: {" "}</p>
                        {university.subjects && university.subjects.map((subject: string) => {
                            let indexValue = -1;
                            en.courses.forEach((course: string, index: number) => {
                                if (course === subject) {
                                    indexValue = index;
                                }
                            });
                            if (i18n.language === "pl") {
                                return (
                                    <p key={indexValue} className="bg-dark-300 px-4 py-2">{pl.courses[indexValue]}</p>);
                            } else {
                                return (
                                    <p key={indexValue} className="bg-dark-300 px-4 py-2">{en.courses[indexValue]}</p>);
                            }
                        })}
                    </div>

                    <Map lat={university.lat} lng={university.lng}/>
                </div>
            )}

        </>
    );
};


export default University;