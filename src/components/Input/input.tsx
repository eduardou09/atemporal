import { IInput } from "@/interfaces/componets";
import { type } from "os";


function Input({ type, value, placeholder, onChange, disabled, id, label }: IInput) {

    return (
        <div className="flex flex-col  w-full">
            <div className="mb-1 text-white">{label}</div>
            <input
                className="px-4 py-2 border border-neutral-600  w-full rounded-xl hover:border-primaryColor  bg-transparent flex-1 text-base text-white"
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
                checked={value}
                disabled={disabled}
                id={id}
            />
        </div>

    )
}

export default Input;