import {forwardRef} from "react";

type InputProps = {
    type: string,
    placeholder?: string,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    className?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {

    const {className} = props

    return (
      <input
        {...props}
        className={`border-dark-300 border-4 px-4 py-2 text-xl shadow-button-add1 rounded-xl ${className}`}
        ref={ref}
      />
    );
})

export default Input