import Tag from "../components/ui/Tag";

const Search = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="h-full w-30%">
                    <input placeholder="test"></input>
                    <div className={"flex flex-col gap-2"}>
                        <Tag text="test" />
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