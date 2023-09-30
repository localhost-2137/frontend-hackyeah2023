import { forwardRef } from "react";

type CheckboxProps = {
    id: string,
    label: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
    return (
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          {...props}
          className={`${props.className}`}
          ref={ref}
        />
        <label htmlFor={props.id} className="text-l truncate cursor-pointer" title={props.label}>
          {props.label}
        </label>
      </div>
    );
});

export default Checkbox;
