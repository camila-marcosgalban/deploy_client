const BASE_URL = 'https://deploy-back-mangaka-v2.herokuapp.com/';

export const AllMangas = BASE_URL + 'api/mangas/allMangas'
export const Directory = BASE_URL + 'api/mangas/directory'
export const Genres = BASE_URL + 'api/mangas/listOfGenres'
export const RecomendedMangas = BASE_URL + 'api/mangas/recentMangas'
export const Detail = BASE_URL + 'api/mangas/manga/'
export const Post = BASE_URL + 'api/mangas/'
export const FilterByAuthor = BASE_URL + 'api/mangas/byAuthor?author='
export const SearchManga = BASE_URL + 'api/mangas/Search?title='
export const Paginado = BASE_URL + 'api/mangas/directory?page='
export const register = BASE_URL + '/api/users/register'