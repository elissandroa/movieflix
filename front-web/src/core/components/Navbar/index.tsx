import ButtonExit from './ButtonExit';
import './styles.scss';
type Props ={
    btnexit?:string;
    visible?:boolean;
}

const Navbar = ({ btnexit, visible}:Props) => {
  return (  
        <nav className="row bg-primary main-nav ">
          <div className="col-2">
              <a href="/home" className="nav-logo-text">
              <h4>MovieFlix</h4>
              </a>
           </div >  
           <div className="col-9  ">
            {visible  && <a href="/"> <ButtonExit text="SAIR" /> </a>} 
           </div> 
        </nav>
  );
}

export default Navbar;