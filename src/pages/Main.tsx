import {motion} from "framer-motion"
import {Outlet, Link} from "react-router-dom"
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Search as SearchIcon} from "react-bootstrap-icons"

const Main = () => {


    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className={"flex flex-col items-center h-screen w-full"}
      >
        <header className="w-full max-w-[1300px] p-6 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-4xl">EduSearch</h1>
          </Link>
          <div className="flex gap-5 items-center">
            <Link
              to="/search"
              className="text-3xl text-add3-300 hover:text-add3-500"
            >
              <SearchIcon />
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