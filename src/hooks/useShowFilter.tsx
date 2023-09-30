import {useState} from "react";

export const useShowFilter = () => {

    const [showFilter, setShowFilter] = useState(true)
    const [showFilterBtn, setShowFilterBtn] = useState("-")

    const toggleShowFilter = () => {
        setShowFilter(prevState => !prevState)
        setShowFilterBtn(prevState => prevState === "+" ? "-" : "+")
    }

    return {
        showFilter,
        showFilterBtn,
        toggleShowFilter
    }
}

