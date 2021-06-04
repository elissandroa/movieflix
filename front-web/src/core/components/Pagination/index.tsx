import './styles.scss';

type Props = {
    item:string;
  }

const Pagination = ({ item,}:Props) => {
    return (
       <div className="movie-pagination-item">{item}</div>
    );
}

export default Pagination;