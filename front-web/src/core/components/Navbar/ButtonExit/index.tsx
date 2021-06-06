import './style.scss';
 
type Props ={
    text?:string;
}
const onClickExit = ()=>{
    localStorage.removeItem("authData");
}

const ButtonExit = ({text}:Props) =>{
     return(
     <button className="mr-5 btn-exit offset-9" onClick={onClickExit}>
         {text}
     </button>
    );
}

export default ButtonExit;