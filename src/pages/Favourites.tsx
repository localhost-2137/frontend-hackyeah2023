import {useEffect, useState} from "react";
import {data} from "autoprefixer";
import {University} from "../logic/types.ts"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {t} from "i18next";

const Favourites = () => {

    const [favourites, setFavourites] = useState<University[]>([]);

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("favourites") ? localStorage.getItem("favourites") : "[]");
        console.log(data)
        if (data) {
            setFavourites(data);
        }

    }, []);

    return (
        <section className="py-6 flex flex-col gap-6">
            {favourites.map((university, i) => {
                return (
                    <motion.div
                        key={university.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0.15 * i}}}
                        className="w-[80vh] max-w-[1300px] p-4 border-2 border-dark-300 hover:bg-dark-500 rounded-xl transition-colors duration-300 max-[800px]:w-[90%] max-[800px]:items-center max-[800px]:mx-auto max-[800px]:text-center overflow-x-hidden"
                    >
                        <Link
                            to={`/university/${university.id}`}
                            className=""
                            key={university.id}
                        >
                            <h4 className="text-xl">{university.name}</h4>
                            <p>{t('address')}: {university.address}</p>
                            <p>{t('rank')}: {university.rank}</p>
                        </Link>
                    </motion.div>
                )
            })}
        </section>
    )
}

export default Favourites