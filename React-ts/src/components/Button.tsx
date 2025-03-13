type ButtonProps ={
    label: string,
    disabled?:boolean,
    variant?: "primary" | "secondary"
}

function Button(): ButtonProps{
 <button>{label}</button>


}

export default Button;