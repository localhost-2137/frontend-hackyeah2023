import {motion} from "framer-motion"
import {Outlet, Link} from "react-router-dom"
import LanguageSwitcher from "../components/LanguageSwitcher";

const Main = () => {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className={"flex flex-col items-center h-screen w-full"}
      >
        <header className="w-full max-w-[1300px] sm:p-6 flex sm:justify-between items-center gap-8 sm:flex-row flex-col">
          <Link to="/" className="flex items-center gap-4 mt-8 sm:mt-0">
            <img className="w-[48px] h-[32px]" src="/logo.png" alt="Logo" />
            <h1 className="text-4xl">EduSearch</h1>
          </Link>
          <div className="flex gap-5 items-center">
            <Link
              to="/search"
              className="text-3xl text-add3-300 hover:text-add3-500"
            >
              Search
            </Link>
            <LanguageSwitcher />
          </div>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </motion.div>
    );
}


export default Main