import ButtonExit from './ButtonExit';
import './styles.scss';
type Props ={
    btnexit?:string;
    visible?:boolean;
}

const Navbar = ({ btnexit, visible}:Props) => {
  return (  <nav className="row bg-primary main-nav ">
        <div className="col-1">
            <a href="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
            </a>
            </div >  
            
            {visible  && <ButtonExit text="SAIR" /> } 
           
        </nav>
  );
}

export default Navbar;