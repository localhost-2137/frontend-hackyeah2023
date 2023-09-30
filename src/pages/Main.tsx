import {motion} from "framer-motion"
import {Link, Outlet} from "react-router-dom";

const Main = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            className={"flex flex-col items-center h-screen w-full"}
        >
            <header className="w-full max-w-[1300px] p-6 flex justify-between items-center">
                <h1 className="text-4xl">EduSearch</h1>
                <Link to="/search" className="text-3xl text-add3-300 hover:text-add3-500">Search</Link>
            </header>
            <Outlet/>
        </motion.div>
    );
}

export default Main