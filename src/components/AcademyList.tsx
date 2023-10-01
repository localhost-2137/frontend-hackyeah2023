import { motion } from "framer-motion";
import {  Link  } from "react-router-dom";
import { University } from "../logic/types";

const AcademyList = (props: {
    universities: University[];
}) => {
    return (

        <div className="flex flex-col justify-center gap-6 cursor-pointer">
            {props.universities.map((university: University, i: number) => {
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: .15 * i } }}
                        className="p-4 border-2 border-dark-300 hover:bg-dark-900 rounded-xl transition-colors duration-300"
                    >
                        <Link to="/university" className="" key={university.id}>
                            <h4 className="text-xl">{university.name}</h4>
                            <p>address: {university.address}</p>
                            <p>rank: {university.rank}</p>
                        </Link>
                    </motion.div>
                );

            })}
        </div>
    );
}

export default AcademyList;
