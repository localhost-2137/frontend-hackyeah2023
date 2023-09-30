import { forwardRef } from "react";

type CheckboxProps = {
    id: string,
    label: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
    return (
        <div className="flex items-center justify-center">
            <input type="checkbox" {...props} className={`${props.className}`} ref={ref} />
            <label htmlFor={props.id} className="ml-2">{props.label}</label>
        </div>
    );
});

export default Checkbox;
