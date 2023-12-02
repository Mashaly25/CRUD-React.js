import {ReactNode, ButtonHTMLAttributes} from "react"
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    width?: "w-full" | "w-fit"
}

export default function Button({children ,className, width = "w-full", ...rest }: Iprops) {
    return (
        <button className={`${className} ${width} p-2 rounded-md text-white`} {...rest}>{children}</button>
    )
}
