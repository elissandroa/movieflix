import './style.scss';
import { useForm } from 'react-hook-form';
import ImageLogin from '../../../core/assets/images/login.svg';
import ButtonIcon from './component/ButtonIcon';
import Navbar from '../../../core/components/Navbar';

type FormData = {
    email: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        
        <>
        <Navbar visible = {false}/>
        <div className="row login-container">
           <div className="col-6" >
                <h1 className="login-title">Avalie Filmes</h1>
                <p className="login-subtitle">Diga o que você achou do seu filme favorito</p>
                <img src={ImageLogin} alt="Login" className="login-image"/>
           </div> 
            <div className="col-6">
               <div className="login-card">
                   <h1 className="login-form-title ">LOGIN</h1>
                  <div className="login-form-align">
                   <form onSubmit={handleSubmit(onSubmit)}>
                       <input 
                       type="email" 
                       className="login-input-username form-control"
                       placeholder="Email"
                       {...register("email")} 
                      />
                      <input 
                      type="password"
                       className="login-input-password form-control"
                       placeholder="Senha"
                       {...register("password")}
                       />
                        <div className="login-button-submit">
                            <ButtonIcon text="logar" />
                        </div>
                   </form>
              </div>    
               
               </div> 
               
                   
               
            </div>

        </div>
        
       
       
       
        </>
    );
}

export default Login;