import { useNavigate } from "react-router"
import Button from "../button/Button"
import Modal from "../modal/Modal"
import style from './Logout.module.scss'
import { toast, ToastContainer } from "react-toastify"
const Logout=()=>{
    const navigate=useNavigate()
const onClickYes=()=>
{
    localStorage.removeItem("token")
toast.success("Logout SuccessFully")
setTimeout(()=>{
 navigate('/',{state:{}})
},2000)
   
        
    
}
const onNoclick=()=>
{
    navigate(-1)
}

    return(
        <Modal>
          <div className={style.Div}>
            <h3>Are you sure want to Logout?</h3>
            <Button onClick={onClickYes}>yes</Button>
            <Button onClick={onNoclick}>No</Button>
          </div>
      <ToastContainer/>
        </Modal>
        
    )
}

export default Logout