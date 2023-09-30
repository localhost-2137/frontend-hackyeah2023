import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const AcademyList = () => {

    const [universities, setUniversities] = useState([])

    useEffect(() => {

        const getData = async () => {
            const response = await fetch("src/data/universities.json")
            const data = await response.json()

            if (response.ok) {
                setUniversities(data)
            }
        }

        getData()
    }, [])


    return (
        <div className="flex flex-col justify-center gap-6">
            {universities.map((university) => {
                return <Link to="/university" className="p-4 border-2 border-dark-300 hover:bg-dark-900"
                             key={university.id}>
                    <h4 className="text-xl">{university.name}</h4>
                    <p>address: {university.address}</p>
                    <p>rank: {university.rank}</p>
                </Link>
            })}
        </div>
    )
}

export default AcademyList;