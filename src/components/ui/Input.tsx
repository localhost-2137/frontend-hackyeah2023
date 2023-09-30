import {forwardRef} from "react";

type InputProps = {
    type: string,
    placeholder?: string,
    className?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {

    const {className} = props

    return (
        <input {...props} className={`border-add1-300 border-4 p-4 py-3 shadow-button-add1 rounded ${className}`}
               ref={ref}/>
    )
})

export default Input