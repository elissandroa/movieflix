import './style.scss';


type Props ={
    text?:string;
}

    




const ButtonExit = ({text}:Props) =>{
    

    const onClickExit = ()=>{
        localStorage.removeItem("authData");
     } 




     return(
     <button className="mr-5 btn-exit offset-9" onClick={onClickExit}>
         {text}
     </button>
    );
}

export default ButtonExit;