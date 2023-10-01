import Button from "./ui/Button.tsx";
import Checkbox from "./ui/Checkbox.tsx";
import Autocomplete from "./ui/Autocomplete.tsx";
import { useTranslation } from "react-i18next";
import { SyntheticEvent, useEffect, useState } from "react";
import { getAllCities } from "../logic/backend.ts";
import { formatQueryParams } from "../logic/other.ts";
import pl from "../locales/pl.json";
import en from "../locales/en.json";

const Filters = (props: {
    handleSearch: (query: string) => void;
}) => {
    const { t } = useTranslation();
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

    const handleSelect = (selectedOptions: string[]) => {
        setSelectedCities(selectedOptions);
    };
    const handleCourseSelect = (option: string, isChecked: boolean) => {
        let indexValue= -1;
        if (!isChecked) {
            setSelectedCourses(selectedCourses.filter((course: string) => course !== option));
            return;
        }
        en.courses.forEach((course: string, index: number) => {
            if (course === option) {
                indexValue = index;
            }
        });
        pl.courses.forEach((course: string, index: number) => {
            if (course === option) {
                indexValue = index;
            }
        });
        const valueToSave = en.courses[indexValue];
        setSelectedCourses([...selectedCourses, valueToSave]);
    };
    const handleSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        let query = "?";
        const citiesParams = formatQueryParams(selectedCities, "cities");
        query += citiesParams + "&";
        const coursesParams = formatQueryParams(selectedCourses, "subjects");
        query += coursesParams;
        props.handleSearch(query);
    };

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
                <h4>{t('localization')}</h4>
            </div>
            <div>
                <Autocomplete
                    options={cities}
                    onSelect={handleSelect}
                    placeholder={t("city")}
                />
            </div>
            <div className="flex gap-4 items-center mt-3 mb-3">
                <h4>{t('coursesStr')}</h4>
            </div>
            <div className="flex flex-col items-start gap-4 max-h-[300px] overflow-scroll border-4 border-dark-300 p-4 rounded-xl">
                {(t("courses", { returnObjects: true }) as any).map((course: string) => {
                    return <Checkbox key={course} id={course} label={course} onChange={(event) => {
                        handleCourseSelect(course, event.target.checked);
                    }} />;
                })}
            </div>
            <div className="py-4">
                <h4>{t('others')}</h4>
            </div>
            <div className="flex flex-col items-start mb-4">
                <Checkbox id="academy" label={t('considerBoardingSchool')} />
            </div>
            <Button type="submit" variant="red">
                {t("search")}
            </Button>
        </form>
    );
};

export default Filters;
