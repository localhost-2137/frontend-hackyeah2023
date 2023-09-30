import Filters from "../components/Filters.tsx";
import AcademyList from "../components/AcademyList.tsx";

const Search = () => {
    return (
        <div className="flex w-full max-w-[1300px] mx-auto my-6 px-6 gap-10">
            <Filters/>
            <div className="w-[2px] min-h-full bg-dark-300"></div>
            <AcademyList/>
        </div>
    )
};

export default Search;