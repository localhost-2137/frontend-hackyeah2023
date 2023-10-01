import Button from "./ui/Button.tsx";
import { useShowFilter } from "../hooks/useShowFilter.tsx";
import Checkbox from "./ui/Checkbox.tsx";
import Autocomplete from "./ui/Autocomplete.tsx";
import { useTranslation } from "react-i18next";
import { SyntheticEvent, useEffect, useState } from "react";
import { getAllCities } from "../logic/backend.ts";

const Filters = () => {
    const { t } = useTranslation();
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);


    const handleSelect = (selectedOptions: string[]) => {
        setSelectedCities(selectedOptions);
    };

    const handleSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(selectedCities);
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
            <div className="flex gap-4 items-center">
                <h4>{t('coursesStr')}</h4>
            </div>
            <div className="flex flex-col items-start gap-4 max-h-[300px] overflow-scroll border-4 border-dark-300 p-4 rounded-xl">
                {(t("courses", { returnObjects: true }) as any).map((course: string) => {
                    return <Checkbox key={course} id={course} label={course} />;
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
