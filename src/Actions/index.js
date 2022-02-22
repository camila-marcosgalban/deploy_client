import { AllMangas, Chapters, Directory, FilterByAuthor, Genres, LoginGoogle, LoginLocal, LogOut, Post, recentMangas, SearchManga, Detail, Paginado, GetChapters, GetUserInfo, getChapterById, wishlist, deleteWishlist, addWishlist, getPacksById} from "./constants";

export const MANGAS_TO_DB = "MANGAS_TO_DB";
export const GET_ALL_MANGAS = "GET_ALL_MANGAS";
export const GET_GENRES = "GET_GENRES";
export const RECENT_MANGAS = "RECENT_MANGAS";
export const GET_DETAIL = "GET_DETAIL";
export const POST_MANGA = "POST_MANGA";
export const FILTRO_GENERO = "FILTRO_GENERO";
export const FILTRO_AUTOR = "FILTRO_AUTOR";
export const ORDER = "ORDER";
export const SEARCH_MANGA = "SEARCH_MANGA";
export const PAGINADO_PAGE = "PAGINADO_PAGE";
export const GET_MANGAS_PREVIEW = "GET_MANGAS_PREVIEW";
export const POST_CHAPTERS = "POST_CHAPTERS";
export const GET_LIBRARY = "GET_LIBRARY";
export const GET_WISHLIST = "GET_WISHLIST";
export const CURRENT_USER = "CURRENT_USER";
export const GET_ALL_CHAPTERS = "GET_ALL_CHAPTERS";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_DETAIL_WISHLIST = "GET_DETAIL_WISHLIST";
export const GET_DETAIL_LIBRARY = "GET_DETAIL_LIBRARY";
export const GET_POPULAR_MANGAS = "GET_POPULAR_MANGAS";
export const GET_AUTHORS = "GET_AUTHORS";
export const CHANGE_SHOW = "CHANGE_SHOW";
export const GET_USERS = "GET_USERS";
export const SET_ACTIVE = "SET_ACTIVE";
export const SET_ACTIVE_MANGA = "SET_ACTIVE_MANGA";
export const SET_ADMIN = "SET_ADMIN";
export const DELETE_WISHLIST_MANGA = "DELETE_WISHLIST_MANGA";
export const ADD_MANGA_WISHLIST = "ADD_MANGA_WISHLIST";
export const POST_CHECKOUT = "POST_CHECKOUT";
export const GET_PACKS = "GET_PACKS";
export const BUY_COINS = "BUY_COINS";
export const GET_CHAPTER = "GET_CHAPTER";
// export const GET_PREFERENCE_ID = "GET_PREFERENCE_ID"
export const GET_PREFERENCE_ID = "GET_PREFERENCE_ID";
export const GET_AUTHOR_DETAILS ='GET_AUTHOR_DETAILS';
export const FAVORITE = 'FAVORITE';
export const GET_POPULAR_AUTHORS = 'GET_POPULAR_AUTHORS'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_BUY_ORDERS = 'GET_BUY_ORDERS'
export const GET_SELL_ORDERS = 'GET_SELL_ORDERS'
export const GET_PANEL_MANGAS  = 'GET_PANEL_MANGAS'
export const BUY_CHAPTERS  =  'BUY_CHAPTERS'
export const GET_SELLER_ORDER = 'GET_SELLER_ORDER'
export const GET_BUYER_ORDER = 'GET_BUYER_ORDER'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const SEE_COMMENTS = 'SEE_COMMENTS'

const axios = require("axios");
const BASE_URL = 'https://deploy-back-mangaka-v2.herokuapp.com/';

export let mangasToDb = () => {
    return async (dispatch) => {
        try {
            let mangas = await axios.get(
                AllMangas
            );
            return dispatch({
                type: MANGAS_TO_DB,
                payload: mangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getAllMangas = () => {
    return async (dispatch) => {
        try {
            let allMangas = await axios.get(
                Directory
            );
            return dispatch({
                type: GET_ALL_MANGAS,
                payload: allMangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getGenres = () => {
    return async (dispatch) => {
        try {
            let allGenres = await axios.get(
                Genres
            );
            return dispatch({
                type: GET_GENRES,
                payload: allGenres.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getRecentMangas = () => {
    return async (dispatch) => {
        try {
            let allMangas = await axios.get(
                recentMangas
            );
            return dispatch({
                type: RECENT_MANGAS,
                payload: allMangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
// falta :id
export let getMangaDetail = (payload) => {
    return async (dispatch) => {
        try {
            let mangaDetail = await axios.get(
                Detail + payload
            );
            return dispatch({
                type: GET_DETAIL,
                payload: mangaDetail.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let postManga = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let manga = await axios.post(
                Post,
                payload
            );
            return dispatch({
                type: POST_MANGA,
                payload: manga.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let filterMangasByGenre = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTRO_GENERO,
                payload: payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
// falta ruta
export let filterMangasByAuthor = (payload) => {
    return async (dispatch) => {
        try {
            let filteredMangas = await axios.get(
                FilterByAuthor + payload
            );
            return dispatch({
                type: FILTRO_AUTOR,
                payload: filteredMangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let orderMangas = (payload) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER,
                payload: payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let searchManga = (payload) => {
    return async (dispatch) => {
        try {
            let search = await axios.get(
                SearchManga + payload
            );
            return dispatch({
                type: SEARCH_MANGA,
                payload: search.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
//show autocomplete in the searchbar
export let getMangasPreview = () => {
    return async (dispatch) => {
        try {
            let search = await axios.get(
                SearchManga
            );
            return dispatch({
                type: GET_MANGAS_PREVIEW,
                payload: search.data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export let paginado = ({ page, genre, order }) => {
    return async (dispatch) => {
        try {
            let mangas = await axios.get(
                `${Paginado + page}&filter=${
                    genre ? genre : ""
                }&order=${order ? order : "asc"}&tags=title`
            );
            return dispatch({
                type: PAGINADO_PAGE,
                payload: mangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let postChapters = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let chapters = await axios.post(
                Chapters,
                payload
            );
            
            return dispatch({
                type: POST_CHAPTERS,
                payload: chapters.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
// falta rutas
// export let getLibrary = (payload) => {
//     return async (dispatch) => {
//         try {
//             let mangas = await axios.get(``)
//             return dispatch({
//                 type: GET_LIBRARY,
//                 payload: mangas.data
//             })
//         } catch(error) {
//             console.log(error)
//         }
//     }
// }

// export let getLibrary = (payload) => {
//     return async (dispatch) => {
//         try {
//             let mangas = await axios.get(``)
//             return dispatch({
//                 type: GET_WISHLIST,
//                 payload: mangas.data
//             })
//         } catch(error) {
//             console.log(error)
//         }
//     }
// }
export let getCurrentUser = (form) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(
                LoginLocal,
                form,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    Authorization: {
                        username: form.username,
                        password: form.password,
                    },
                    withCredentials: true,
                }
            );

            const response = await request.data;
            localStorage.setItem("user", JSON.stringify(response));
            const user = JSON.parse(localStorage.getItem("user"));

            return dispatch({ type: CURRENT_USER, payload: user });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const UserLogout = () => {
    return async (dispatch) => {
        try {
            const request = await axios({
                method: "GET",
                withCredentials: true,
                url: LogOut,
            });
            const response = await request.data;
            console.log(response);
            localStorage.clear();
            return dispatch({
                type: CURRENT_USER,
                payload: null,
            });
        } catch (e) {
            console.log(e.message);
        }
    };
};


//Traer id desde el back
const getUser = () => {
    return async (dispatch) => {
        try {
            const request = await axios({
                method: "GET",
                withCredentials: true,
                url: "https://deploy-back-mangaka-v2.herokuapp.com/api/users/currentUser",
            });
            const response = request.data;
            console.log(response.data);
            return dispatch({})
            }catch(e){
                console.log(e)
            }
}
}


export const getGoogleUser = () => {
    return async (dispatch) => {
        try {
            const request = await axios({
                method: "GET",
                withCredentials: true,
                url: LoginGoogle,
            });
            console.log(request)
            const response = await request.data;
            console.log(response)
            if (response.msg === "usuario no logueado") {
                return dispatch({
                    type: CURRENT_USER,
                    payload: null,
                });
            }
            localStorage.setItem("user", JSON.stringify(response));
            const user = JSON.parse(localStorage.getItem("user"));
            return dispatch({
                type: CURRENT_USER,
                payload: user,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export let getChapters = (payload) => {
    return async (dispatch) => {
        try {
            let allChapters = await axios.get(
                GetChapters + payload
            );
            return dispatch({
                type: GET_ALL_CHAPTERS,
                payload: allChapters.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export let getUserInfo = (payload) => {
    return async (dispatch) => {
        try {
            let user = await axios.get(GetUserInfo + payload)
            return dispatch({
                type: GET_USER_INFO,
                payload: user.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export let getWishList = (payload) => {
    return async (dispatch) => {
        try {
            let mangas = await axios.get(wishlist, { withCredentials: true })
            return dispatch({
                type: GET_WISHLIST,
                payload: mangas.data
            })
        } catch(error) {
            console.log(error.response)
        }
    }
}

export let deleteWishlistManga = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload)
            let manga = axios.put(deleteWishlist, {mangaId: payload}, { withCredentials: true })
            return dispatch({
                type: DELETE_WISHLIST_MANGA,
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let addMangaWishList = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload)
            let manga = axios.put(addWishlist, payload, { withCredentials: true })
            return dispatch({
                type: ADD_MANGA_WISHLIST,
                payload: manga.data
            })
        } catch(error) {
            console.log(error.response)
        }
    }
}

export let getMangaDetailWishList = (payload) => {
    return async (dispatch) => {
        try {
            let mangaDetail = await axios.get(
                Detail + payload
            );
            return dispatch({
                type: GET_DETAIL_WISHLIST,
                payload: mangaDetail.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getMangaDetailLibrary = (payload) => {
    return async (dispatch) => {
        try {
            let mangaDetail = await axios.get(
                Detail + payload
            );
            return dispatch({
                type: GET_DETAIL_LIBRARY,
                payload: mangaDetail.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getPopularMangas = () => {
    return async (dispatch) => {
        try {
            let mangas = await axios.get(getPopularMangas)
            return dispatch({
                type: GET_POPULAR_MANGAS,
                payload: mangas.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let popularAuthors = () => {
    return async (dispatch) => {
        try{ 
            let authors = await axios.get()
            return dispatch({
                type: GET_AUTHORS,
                payload: authors.data
            })
        } catch(error) {
            // console.log(error)
        }
    }
}

export let changeShow = () => {
    return async (dispatch) => {
        try {
            return dispatch( {
                type: CHANGE_SHOW
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export let getAllUsers = () => {
    return async (dispatch) => {
        try {
            let users = await axios.get(
                'https://deploy-back-mangaka-v2.herokuapp.com/api/users', {withCredentials: true}
            );
            return dispatch({
                type: GET_USERS,
                payload: users.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let setActive = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let setActive = await axios.put(
                 `https://deploy-back-mangaka-v2.herokuapp.com/api/users/user/setActive/${payload}`, { withCredentials: true}
            );
            return dispatch({
                type: SET_ACTIVE,
                payload: setActive.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let setActiveManga = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let setActiveManga = await axios.put(
                `https://deploy-back-mangaka-v2.herokuapp.com/api/mangas/manga/setActive/${payload}`, { withCredentials: true}
            );
            return dispatch({
                type: SET_ACTIVE_MANGA,
                payload: setActiveManga.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let setAdmin = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let setAdmin = await axios.put(
                `https://deploy-back-mangaka-v2.herokuapp.com/api/users/user/setAdmin/${payload}`, { withCredentials: true}
            );
            return dispatch({
                type: SET_ADMIN,
                payload: setAdmin.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let postCheckout = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let checkout = await axios.post(
                postCheckout,
                payload
            );
            
            return dispatch({
                type: POST_CHECKOUT,
                payload: checkout.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
                
export let getPacks = () => {
    return async (dispatch) => {
        try {
            let packs = await axios.get(
                'https://deploy-back-mangaka-v2.herokuapp.com/api/coins/pack'
            );
            return dispatch({
                type: GET_PACKS,
                payload: packs.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let buyCoins = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let buyCoins = await axios.post(
                'https://deploy-back-mangaka-v2.herokuapp.com/api/coins/buy',
                payload,
                    {withCredentials: true},
            );
            return dispatch({
                type: BUY_COINS,
                payload: buyCoins,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

// export let getPreferenceId = (payload) => {
//     return async (dispatch) => {
//         try {
//             console.log(payload);
//             let getPreferenceId = await axios.get(
//                 `https://deploy-back-mangaka-v2.herokuapp.com/api/coins/buy`
//             );
//             console.log(getPreferenceId)
//             return dispatch({
//                 type: GET_PREFERENCE_ID,
//                 payload: getPreferenceId,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

export let getChapter = (payload) => {
    return async (dispatch) => {
        try {
            let getChapter = await axios.get(
                getChapter + payload
            );
            return dispatch({
                type: GET_CHAPTER,
                payload: getChapter.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//-------------------- DETALLES DE AUTOR -------------------------//
export let getAuthorDetail = (id) => {
    return async (dispatch) => {
        try {
            let authorDetail = await axios(BASE_URL + `api/users/user/${id}`)
            return dispatch({
                type: 'GET_AUTHOR_DETAILS',
                payload: authorDetail.data
            })
        } catch (error){
            console.log(error.msg)
        }
    };
};

//------------------------- FAVORITOS -------------------------------//
export let favorite = () =>{
    return async (dispatch) => {
        try {
            let favorite = await axios.get(BASE_URL + `api/profile/favorites`, {withCredentials:true})
            return dispatch({
                type: 'FAVORITE',
                payload: favorite.data
            });
        } catch (error){
            console.log(error)
        }
    };
};

//------------------ REMOVE FAVORITE  -----------------------------------------//
export let removeFavorite = (id) => {
    return (dispatch) => {
        return dispatch({
            type: 'REMOVE_FAVORITE',
            payload: id
        });
    }
}

export let getBuyOrders = () =>{
    return async (dispatch) => {
        try {
            let getBuyOrders = await axios.get(BASE_URL + `api/coins/getBuyOrders`, {withCredentials:true})
            return dispatch({
                type: 'GET_BUY_ORDERS',
                payload: getBuyOrders.data
            });
        } catch (error){
            console.log(error)
        }
    };
};

export let getSellOrders = () =>{
    return async (dispatch) => {
        try {
            let getSellOrders = await axios.get(BASE_URL + `api/coins/getSellOrders`, {withCredentials:true})
            return dispatch({
                type: 'GET_SELL_ORDERS',
                payload: getSellOrders.data
            });
        } catch (error) {
            console.log(error.response)
        }
    }
}
                
//-------------------- CREAR COMENTARIOS ---------------------------------//
export let createComment = (payload) => {
    return async function (dispatch) {
        console.log(payload,'pay')
        try{
            const comments = await axios.post(BASE_URL + `api/comments/addComent`, payload , {withCredentials:true});
            console.log(comments,'comentarios')
            dispatch({
                type: "CREATE_COMMENT",
                payload: comments.data 
            });
        } catch (error) {
            console.log(error.response)
        }
    }
}

//--------------------- ver comentarios -------------------------------//

export let verComentarios = (id) => {
    return async function (dispatch) {
        try {
            let allComments = await axios.get(BASE_URL + `api/comments/getComments/${id}`, {withCredentials:true})
            return dispatch({
                type: 'SEE_COMMENTS',
                payload: allComments.data
            });
        } catch (error){
            console.log(error)
        }
    };
};

export let getPanelMangas = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let getPanelMangas = await axios(BASE_URL + 
                `api/mangas//panel/allMangas`,  { withCredentials: true}
            );
            return dispatch({
                type: GET_PANEL_MANGAS,
                payload: getPanelMangas.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let buyChapters = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload);
            let buyChapters = await axios.post(BASE_URL + 
                `api/buyChapter/buyChapter`,
                payload,
                { withCredentials: true }
            );
            return dispatch({
                type: BUY_CHAPTERS,
                payload: buyChapters,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export let getBuyerOrder = () =>{
    return async (dispatch) => {
        try {
            let getBuyerOrder = await axios.get(BASE_URL + `api/buyChapter/getBuyerOrder`, {withCredentials:true})
            return dispatch({
                type: 'GET_BUYER_ORDER',
                payload: getBuyerOrder.data
            });
        } catch (error){
            console.log(error)
        }
    };
};

export let getSellerOrder = () =>{
    return async (dispatch) => {
        try {
            let getSellerOrder = await axios.get(BASE_URL + `api/buyChapter/getSellerOrder`, {withCredentials:true})
            return dispatch({
                type: 'GET_SELLER_ORDER',
                payload: getSellerOrder.data
            });
        } catch (error){
            console.log(error)
        }
    };
};
