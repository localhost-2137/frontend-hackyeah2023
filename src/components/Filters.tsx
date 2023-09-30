import Button from "./ui/Button.tsx";
import Input from "./ui/Input.tsx";
import {useShowFilter} from "../hooks/useShowFilter.tsx";
import Checkbox from "./ui/Checkbox.tsx";
import { useTranslation } from "react-i18next";

const Filters = () => {
    const { t } = useTranslation();

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

    return (
      <form>
        <div className="flex gap-4 items-center">
          <h4>Localization</h4>
          <Button
            onClick={toggleLocalization}
            type="button"
            className="text-xl p-0"
          >
            {localizationBtn}
          </Button>
        </div>
        {showLocalization && (
          <div>
            <Input type="text" placeholder="Search for city" />
          </div>
        )}
        <div className="flex gap-4 items-center">
          <h4>Coursers</h4>
          <Button onClick={toggleCourses} type="button" className="text-xl p-0">
            {coursersBtn}
          </Button>
        </div>
        {showCourses && (
          <div className="flex flex-col items-start gap-4 max-h-[300px] overflow-scroll border-8 border-add1-500 p-4 rounded">
            {(t("courses", { returnObjects: true }) as any).map((course: any) => {
              return <Checkbox key={course} id={course} label={course} />;
            })}
          </div>
        )}
        <div className="py-4">
          <h4>Others</h4>
        </div>
        <div className="flex flex-col items-start p-4">
          <Checkbox id="academy" label="Consider boarding school" />
        </div>
      </form>
    );
}

export default Filters;