import {motion} from "framer-motion"
import {Outlet, Link} from "react-router-dom"
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";

const Main = () => {
    const {t} = useTranslation();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            className={"flex flex-col items-center h-screen w-full"}
        >
            <header className="w-full max-w-[1300px] p-6 flex justify-between items-center">
                <h1 className="text-4xl">EduSearch</h1>
                <div className="flex gap-5 items-center">
                    <Link to="/search" className="text-3xl text-add3-300 hover:text-add3-500">Search</Link>
                    <LanguageSwitcher/>
                </div>

            </header>
            <main>
                <Outlet/>
            </main>
        </motion.div>
    );
}


export default Main