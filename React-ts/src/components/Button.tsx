import "./Button.css"

type Variant = "royalblue" | "gray" | "green"


interface ButtonProps {
    label: string,
    disabled?:boolean,
    variant?: Variant
}

function Button({label, disabled= false, variant}: ButtonProps){
return (
<button className={`${disabled}`} style={{ background: variant }}>{label}</button>

)


}

export default Button;