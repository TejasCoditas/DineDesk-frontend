import type { ButtonProps } from "./Button.type"
import style from './Button.module.scss'

const Button=(props:ButtonProps)=>
{
    return <button className={style.Button} {...props}>{props.children}</button>
}

export default Button