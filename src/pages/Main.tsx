import {motion} from "framer-motion"
import {Outlet, Link} from "react-router-dom"
import LanguageSwitcher from "../components/LanguageSwitcher";
import {Search as SearchIcon} from "react-bootstrap-icons"
import UniversitiesMap from "../components/maps/UniversitiesMap.tsx";

const Main = () => {


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            className={"flex flex-col items-center h-screen w-full"}
        >
            <header
                className="w-full max-w-[1300px] sm:p-6 flex sm:justify-between items-center gap-8 sm:flex-row flex-col">
                <Link to="/" className="flex items-center gap-4 mt-8 sm:mt-0">
                    <img className="w-[48px] h-[32px]" src="/logo.png" alt="Logo"/>
                    <h1 className="text-4xl">EduSearch</h1>
                </Link>
                <div className="flex gap-5 items-center">
                    <Link
                        to="/search"
                        className="text-3xl text-add3-300 hover:text-add3-500"
                    >
                        <SearchIcon/>
                    </Link>
                    <LanguageSwitcher/>
                </div>
            </header>
            <main className="flex-1">
                <Outlet/>
                <UniversitiesMap universities={
                    [
                        {
                            "academic": true,
                            "address": "Gołębia 24, 31-007 Kraków, Polska",
                            "city": "Kraków",
                            "id": 1,
                            "lat": 50.0610645,
                            "lng": 19.9328982,
                            "name": "Uniwersytet Jagielloński",
                            "number_students": 34309,
                            "rank": 795,
                            "subjects": "Other Health,Chemistry,Economics & Econometrics,Geology, Environmental, Earth & Marine Sciences,History, Philosophy & Theology,Psychology,Politics & International Studies (incl Development Studies),Law,Languages, Literature & Linguistics,Physics & Astronomy,Medicine & Dentistry,Communication & Media Studies,Sociology,Accounting & Finance,Mathematics & Statistics,Art, Performing Arts & Design,Business & Management,Geography,Computer Science,Archaeology,Biological Sciences,Education",
                            "url": "/world-university-rankings/jagiellonian-university"
                        },
                        {
                            "academic": true,
                            "address": "Krakowskie Przedmieście 26/28, 00-927 Warszawa, Polska",
                            "city": "Warszawa",
                            "id": 2,
                            "lat": 52.2403463,
                            "lng": 21.0186012,
                            "name": "Uniwersytet Warszawski",
                            "number_students": 34342,
                            "rank": 839,
                            "subjects": "Accounting & Finance,Chemistry,Law,Biological Sciences,Communication & Media Studies,Sociology,Physics & Astronomy,Education,Politics & International Studies (incl Development Studies),Economics & Econometrics,Archaeology,Geology, Environmental, Earth & Marine Sciences,Business & Management,Geography,History, Philosophy & Theology,Psychology,Art, Performing Arts & Design,Computer Science,Medicine & Dentistry,Mathematics & Statistics,Languages, Literature & Linguistics",
                            "url": "/world-university-rankings/university-warsaw"
                        }
                    ]
                }/>
            </main>
        </motion.div>
    );
}


export default Main