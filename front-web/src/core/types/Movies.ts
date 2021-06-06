export type MoviesResponse = {
    content: Movies[]  
    totalPages: number;
}

export type GenreResponse = {
    content: Genre[];
}


export type Movies = {
    id?: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis:string;
    genre?: Genre[];
    user?: User[];
    reviews?: Reviews[];

}

export type Reviews = {
    id: number;
    text:string;
    movieId:number;
    user: User[];
}

export type User = {
    id:number;
    name:string;
    email:string;
}

export type Genre = {
    id: number;
    name:string
}