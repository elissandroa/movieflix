import './style.scss';
 
type Props ={
    text?:string;
}

const ButtonExit = ({text}:Props) =>{
     return(
     <button className="mr-5 btn-exit offset-9">
         {text}
     </button>
    );
}

export default ButtonExit;