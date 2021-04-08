import ButtonExit from './ButtonExit';
import './styles.scss';
type Props ={
    btnexit?:string;
}

let visible = true;


const Navbar = ({ btnexit}:Props) => {
  return (  <nav className="row bg-primary main-nav ">
        <div className="col-1">
            <a href="test" className="nav-logo-text">
            <h4>MovieFlix</h4>
            </a>
            </div >  
            
            {visible === false && <ButtonExit text="SAIR" /> } 
           
        </nav>
  );
}

export default Navbar;