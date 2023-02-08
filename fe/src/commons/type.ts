export type UserLogin = {
    username: string | undefined;
    password: string | undefined;
}
export type AdminLogin = {
    username: string;
    password: string;
    accessToken: string;
}
export type IRegister= {
    username: string;
    password: string;
    email: string;
    fullname: string;
    accessToken: string;
}
export type singleMovie = {
    id: number;
    description: string;
    thumbnail: string;
    trailer: string
}
export type IMovies = {
    
    id: number;
    description: string;
    thumbnail: string;
    trailer: string
}