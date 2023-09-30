import {forwardRef} from "react";

type InputProps = {
    type: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {

    return (
        <input {...props} ref={ref}/>
    )
})

export default Input