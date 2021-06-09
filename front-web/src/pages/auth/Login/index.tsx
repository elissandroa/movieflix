import './style.scss';
import { useForm } from 'react-hook-form';
import ImageLogin from '../../../core/assets/images/login.svg';
import ButtonIcon from './component/ButtonIcon';
import Navbar from '../../../core/components/Navbar';
import { makeLogin } from '../../../core/utils/request';
import { useState } from 'react';
import { saveSessionData } from '../../../core/utils/auth';
import { useHistory } from 'react-router';

type FormState = {
    username: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        makeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/home');
        })
        .catch(()=>{
            setHasError(true);
        })
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
             <div className="col-6 d-flex justify-content-center">
               <div className="login-card">
                   <h1 className="login-form-title ">LOGIN</h1>
                   {hasError && (
                       <div className="alert alert-danger mt-3 d-flex justify-content-center alert-login mt-4">
                       Usuário ou senha inválidos !
                 </div>
                   )}
                  <div className="login-form-align">
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                       <input 
                       type="email" 
                       className="login-input-username form-control"
                       placeholder="Email"
                       {...register("username" , {required:true})} 
                      />
                      <input 
                      type="password"
                       className="login-input-password form-control"
                       placeholder="Senha"
                       {...register("password", {required : true})}
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