import Filters from "../components/Filters.tsx";
import AcademyList from "../components/AcademyList.tsx";
import { motion } from "framer-motion";

const Search = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="flex w-full max-w-[1300px] mx-auto my-6 px-6 gap-10"
      >
        <Filters />
        <div className="w-[2px] min-h-full bg-dark-300"></div>
        <AcademyList />
      </motion.div>
    );
};

export default Search;