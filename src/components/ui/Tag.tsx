const Tag = (props: {
    text: string;
}) => {
    return (
        <button className={"px-4 py-2 border-dark-300 rounded-full bg-transparent border-2"}>
            {props.text}
        </button>
        );
};

export default Tag;