import Input from "../components/ui/Input";
import Tag from "../components/ui/Tag";

const Search = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="h-full w-30%">
                    <div className={""}>
                        <h5 className={"text-2xl font-bold"}>Localization</h5>
                        <Input type="text" placeholder="Search by city" />
                        <Tag text="test" />
                    </div>
                    <input placeholder="test"></input>
                    <div className={"flex flex-col gap-2"}>
                      
                    </div>
                </div>
                <div className="h-full flex-1">
                    s
                </div>
            </div>
        </>
    )
};

export default Search;