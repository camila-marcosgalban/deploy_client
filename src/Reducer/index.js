import {
    MANGAS_TO_DB,
    GET_ALL_MANGAS,
    GET_GENRES,
    GET_DETAIL,
    POST_MANGA,
    FILTRO_GENERO,
    FILTRO_AUTOR,
    ORDER,
    SEARCH_MANGA,
    RECENT_MANGAS,
    PAGINADO_PAGE,
    GET_MANGAS_PREVIEW,
    POST_CHAPTERS,
    GET_LIBRARY,
    GET_WISHLIST,
    CURRENT_USER,
    GET_ALL_CHAPTERS,
    GET_USER_INFO,
    GET_DETAIL_WISHLIST,
    GET_DETAIL_LIBRARY,
    GET_POPULAR_MANGAS,
    GET_AUTHORS,
    CHANGE_SHOW,
    GET_USERS,
    SET_ACTIVE,
    SET_ACTIVE_MANGA,
    SET_ADMIN,
    DELETE_WISHLIST_MANGA,
    ADD_MANGA_WISHLIST,
    POST_CHECKOUT,
    GET_PACKS,
    BUY_COINS,
    GET_CHAPTER,
    GET_AUTHOR_DETAILS,
    FAVORITE,
    GET_POPULAR_AUTHORS,
    REMOVE_FAVORITE,
    GET_BUY_ORDERS,
    GET_SELL_ORDERS,
    GET_BUYER_ORDER,
    GET_SELLER_ORDER,
    GET_PANEL_MANGAS,
    BUY_CHAPTERS,
    SEE_COMMENTS,
    // GET_PREFERENCE_ID
} from "../Actions";

const initialState = {
    mangas:[],
    allMangas: [],
    recentMangas: [],
    popularMangas: [],
    mangaDetail: {},
    genres: [],
    mangasPreview: [],
    filters: {
        genre: "",
        order: "",
        tag: ""
    },
    library: [],
    wishlist: [],
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    allChapters:[],
    userInfo: {},
    authors: [],
    show: true,
    allUsers: [],
    getPacks: [],
    preferenceId: [],
    chapter: [],
    authorDetail: undefined,
    favorite: [],
    popularAuthors: [],
    getBuyOrders: [],
    getSellOrders: [],
    getBuyerOrder: [],
    getSellerOrder: [],
    panelMangas: [],
    chapters: [],
    panelMangas: [],
    allComments:[],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CURRENT_USER:
            return {
                ...state,
                user: payload,
            };
        case MANGAS_TO_DB:
            return {
                ...state,
                allMangas: payload
            };
            case GET_ALL_MANGAS:
                return {
                    ...state,
                    allMangas: payload,
                    filters: {
                        genre: '',
                        order: '',
                        tag: ''
                    }
                };
        case GET_GENRES:
            return {
                ...state,
                genres: payload,
            };
        case RECENT_MANGAS:
            return {
                ...state,
                recentMangas: payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                mangaDetail: payload,
            };
        case GET_MANGAS_PREVIEW:
            return {
                ...state,
                mangasPreview: payload,
            };
        case POST_MANGA:
            return {
                ...state,
            };
        case FILTRO_GENERO:
            return {
                ...state,
                allMangas: payload,
                filters: {
                    genre: payload,
                    order: state.filters.order,
                },
            };
        case FILTRO_AUTOR:
            return {
                ...state,
                allMangas: payload,
            };
            case ORDER:
                return {
                    ...state,
                    filters: {
                        order: payload.order,
                        genre: state.filters.genre,
                        tag:payload.tag
                    },
                };
        case SEARCH_MANGA:
            return {
                ...state,
                allMangas: payload,
            };
        case PAGINADO_PAGE:
            return {
                ...state,
                allMangas: payload,
            };
        case POST_CHAPTERS:
            return {
                ...state,
            };
        case GET_LIBRARY:
            return {
                ...state,
                library: payload,
            };
        case GET_WISHLIST:
            return {
                ...state,
                wishlist: payload,
            };
            case GET_ALL_CHAPTERS:
                return {
                    ...state,
                    allChapters: payload,
                    
                };
        case GET_USER_INFO: 
            return {
                ...state,
                userInfo: payload
            }
        case GET_DETAIL_LIBRARY:
            return {
                ...state,
                library: state.library.concat(payload)
            }
        case GET_POPULAR_MANGAS:
            return {
                ...state,
                popularMangas: payload
            }
        case GET_AUTHORS:
            return {
                ...state,
                authors: payload
            }
        case CHANGE_SHOW:
            return {
                ...state,
                show: !state.show
            }
        case GET_USERS:
            return {
                ...state,
                allUsers: payload,
                
            };
        case SET_ACTIVE:
            return {
                ...state,
        };
        case SET_ACTIVE_MANGA:
            return {
                ...state,
        };
        case SET_ADMIN:
            return {
                ...state,
        };
        case DELETE_WISHLIST_MANGA:
            return {
                ...state
            }
        case ADD_MANGA_WISHLIST: 
            return {
                ...state,
                wishlist: state.wishlist.concat(payload)
            }

        case POST_CHECKOUT:
            return {
                ...state,
            };

        case GET_PACKS:
            return {
                ...state,
                getPacks: payload,
                
            };
        case BUY_COINS:
            return {
                ...state,
                preferenceId: payload,
            }
        case GET_CHAPTER:
            return {
                ...state,
                chapter: payload,
            }
        // case GET_PREFERENCE_ID:
        //     return {
        //         ...state,
        //         preferenceId: payload,
        //     };
        case GET_AUTHOR_DETAILS:
            return {
                ...state,
                authorDetail: payload,
            };
        case FAVORITE:
            return {
                ...state,
                favorite: payload,
            };
        case GET_POPULAR_AUTHORS: 
            return {
                ...state,
                popularAuthors: payload
            };
        case REMOVE_FAVORITE:
            
            let remove = state.favorite.data.filter((f)=> {return f.id !== payload});    
          
            return {
                ...state,
                favorite: {data:remove, totalFavorites:remove.length}
            };
        case GET_BUY_ORDERS: 
            return {
                ...state,
                getBuyOrders: payload
            };
        case GET_SELL_ORDERS: 
            return {
                ...state,
                getSellOrders: payload
            };
        case GET_PANEL_MANGAS:
            return {
                ...state,
                panelMangas: payload
            }
            case GET_BUYER_ORDER:
            return {
                ...state,
                getBuyerOrder: payload
            }
            case GET_SELLER_ORDER:
            return {
                ...state,
                getSellerOrder: payload
            }
        case BUY_CHAPTERS:
            return {
                ...state
            }
        case SEE_COMMENTS:
            return {
                ...state,
                allComments: payload
            };
        default:
            return state;
    }
};

export default rootReducer;
   