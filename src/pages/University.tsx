import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Map from "../components/Map";

const University = () => {

    const [university, setUniversity] = useState<any>([])
    const {id} = useParams()

    useEffect(() => {

        const getData = async () => {
            const response = await fetch("../src/data/universities.json")
            const data = await response.json()

            if (response.ok) {
                const result = data.filter((university: any) => university.id == id)
                console.log(result)
                setUniversity(result)
            }
        }

        getData()

    }, [])

    return (
        <>
            {university.map((university: any) => {
                return (
                    <div className="py-6 max-w-[1300px] w-full flex flex-col gap-6" key={university.id}>
                        <h2 className="text-2xl">{university.name}</h2>
                        <div className="flex justify-between items-center">
                            <p>address: {university.address}</p>
                            <p>rank: {university.rank}</p>
                        </div>

                        <p>number of students: {university.number_students}</p>
                        <p>have academic: {university.academic ? "yes" : "no"}</p>
                        <p>subjects: {university.subjects}</p>

                        <Map lat={university.lat} lng={university.lng}/>
                    </div>
                )
            })
            }
        </>
    )
}

export default University