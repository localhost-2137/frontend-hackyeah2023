import {useEffect, useState} from "react";
import Filters from "../components/Filters.tsx";
import AcademyList from "../components/AcademyList.tsx";
import {motion} from "framer-motion";
import {University} from "../logic/types.ts";
import {getAllUniversities, searchUniversities} from "../logic/backend.ts";

const Search = () => {
    const [universities, setUniversities] = useState<University[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUniversities()
            if (data) {
                setUniversities(data);
            }
        };

        getData();
    }, []);

    const handleSearch = async (query: string) => {
        const data = await searchUniversities(query);
        setUniversities(data);
    };


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            className="flex mx-auto w-full max-w-[90%] justify-center my-6 sm:gap-10 sm:flex-row flex-col gap-0 p-8"
        >
            <Filters handleSearch={handleSearch}/>
            <div className="w-[2px] min-h-full bg-dark-300"></div>
            <AcademyList universities={universities}/>
        </motion.div>
    );
};

export default Search;
