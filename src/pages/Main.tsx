import { motion } from "framer-motion"

const Main = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <header>
          <h1>EduSearch</h1>
        </header>
        <main></main>
      </motion.div>
    );
}

export default Main