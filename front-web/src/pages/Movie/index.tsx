import Navbar from '../../core/components/Navbar';
import ReviewCard from '../Movie/components/ReviewCard';
import './style.scss';

const Movie = () => {
    return (
       <div className=" movie-justify-content">
            <Navbar visible = {true}/> 
           <div className="row movie-container" >
               <div className="col-6 ">
                <div className="movie-photo-container">
                    <img src="https://www.themoviedb.org/t/p/original/h2kcFAIdzxdDGe3BOuG4i1ikjp0.jpg" alt="Movie" className="movie-photo-details"/>
                </div>
               </div>
               <div className="col-6">
                  <div className="movie-description">
                      <h1 className="movie=description-title">Mulher Maravilha 1984</h1>
                      <h3 className="movie-description-year">2020</h3>
                      <p className="movie-description-subTitle">Uma nova era de maravilhas começa</p>
                      <textarea className="movie-description-synopsis"> Em 1984, Diana Prince entra em conflito com 
                      dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente 
                      com seu antigo interesse amoroso Steve Trevor.</textarea>
                  </div> 
               </div>
           </div>  
            <div className="form-review-container">
                <form action="">
                    <input type="text" className="form-input-reviews"/>
                </form>
                <div className="button-container" >
                <button  className="button-salve-reviews">
                    SALVAR AVALIAÇÃO
                </button>
                </div>
            </div>  
            <div className="reviews-container">
                <div>
                   <ReviewCard username="Bob" /> <br/>
                   <ReviewCard username="Ana Maria"/> <br/>
                   <ReviewCard username="Michele"/> <br/>
                   <ReviewCard username="Barbara"/> <br/>
                   <ReviewCard username="Aline "/> <br/>
                   <ReviewCard username="Dora"/> <br/>
                   <ReviewCard username="Rafaela"/> <br/>
                   <ReviewCard username="Dudu"/> <br/>
                </div>
            </div> 
            <div className="space-end-page">
            </div>       
       </div>
    );
}

export default Movie;