import Button from "./ui/Button.tsx";
import { useShowFilter } from "../hooks/useShowFilter.tsx";
import Checkbox from "./ui/Checkbox.tsx";
import Autocomplete from "./ui/Autocomplete.tsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getAllCities } from "../backend.ts";

const Filters = () => {
    const { t } = useTranslation();
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);

    const {
        showFilter: showLocalization,
        showFilterBtn: localizationBtn,
        toggleShowFilter: toggleLocalization,
    } = useShowFilter()
    const {
        showFilter: showCourses,
        showFilterBtn: coursersBtn,
        toggleShowFilter: toggleCourses
    } = useShowFilter()

    const handleSelect = (selectedOption: any) => {
        setSelectedCities(selectedOption);
    };

    const handleSearch = (event: any) => {
        event.preventDefault();
        console.log(selectedCities);
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAllCities();
            console.log(data);
            setCities(data);
        };
        getData();
    }, []);


    return (
        <form onSubmit={handleSearch}>
            <div className="flex gap-4 items-center">
                <h4>Localization</h4>
                <Button onClick={toggleLocalization} type="button" className="text-xl p-0">{localizationBtn}</Button>
            </div>
            {showLocalization && <div>
                <Autocomplete options={cities} onSelect={handleSelect} placeholder={t('city')} />
            </div>}
            <div className="flex gap-4 items-center">
                <h4>Coursers</h4>
                <Button onClick={toggleCourses} type="button" className="text-xl p-0">{coursersBtn}</Button>
            </div>
            {showCourses && <div className="flex flex-col items-start gap-4 max-h-[300px] overflow-scroll border-4 border-dark-300 p-4 rounded-xl">
                {(t("(courses", { returnObjects: true }) as any) as any).map((course: any) => {
                    return <Checkbox key={course} id={course} label={course} />;
                })}
            </div>}
            <div className="py-4">
                <h4>Others</h4>
            </div>
            <div className="flex flex-col items-start p-4">
                <Checkbox id="academy" label="Consider boarding school" />
            </div>
            <Button type="submit" variant="red" onClick={handleSearch}>{t('search')}</Button>
        </form>
    )
};

export default Filters;
