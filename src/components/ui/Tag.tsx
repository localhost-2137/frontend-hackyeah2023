import { X } from "react-bootstrap-icons";

const Tag = (props: {
    text: string;
    handleDelete: (city: string) => void;
}) => {
    return (
        <div className={"px-4 py-2 border-dark-300 rounded-full bg-transparent border-2 flex flex-row"}>
            {props.text}
            <X style={{fontSize: 25, cursor: "pointer"}} onClick={() => {
                props.handleDelete(props.text);
            }} />
        </div>
    );
};

export default Tag;