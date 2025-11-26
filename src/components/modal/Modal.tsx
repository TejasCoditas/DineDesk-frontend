import style from './Modal.module.scss'
import type { ModalProps } from './Modal.type'
const Modal=(props:ModalProps)=>
{
    return(
        <>
        <div className={style.Modal}>
            {props.children}
        </div>
        </>
    )
}

export default Modal