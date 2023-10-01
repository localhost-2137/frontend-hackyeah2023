import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {University} from "../logic/types";
import {t} from "i18next";

const AcademyList = (props: { universities: University[] }) => {

    console.log(props.universities);

    return (
        <div className="flex flex-col justify-center gap-6 cursor-pointer">
            {props.universities.map((university: University, i: number) => {
                return (
                    <motion.div
                        key={university.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 0.15 * i}}}
                        className="p-4 border-2 border-dark-300 hover:bg-dark-500 rounded-xl transition-colors duration-300 max-[800px]:w-[90%] max-[800px]:items-center max-[800px]:mx-auto max-[800px]:text-center overflow-x-hidden"
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
                );
            })}
        </div>
    );
};

export default AcademyList;
