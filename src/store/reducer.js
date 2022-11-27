// const SET_REPOS = "SET_REPOS"
// const SET_IS_FETCHING = "SET_IS_FETCHING"
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// const SET_FETCH_ERROR = "SET_FETCH_ERROR"
const SET_IS_BURGER_ACTIVE = 'SET_IS_BURGER_ACTIVE';

const defaultState = {
  // items: [],
  // isFetching: true,
  // currentPage:1,
  // perPage:10,
  // totalCount:0,
  // isFetchError: false
  isBurgerActive: false,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    // case SET_REPOS:
    //     return {
    //         ...state,
    //         items: action.payload.items,
    //         totalCount: action.payload.total_count,
    //         isFetching: false
    //     }
    case SET_IS_BURGER_ACTIVE:
      return {
        ...state,
        isBurgerActive: action.payload,
      };
    // case SET_IS_FETCHING:
    //     return {
    //         ...state,
    //         isFetching: action.payload
    //     }
    // case SET_CURRENT_PAGE:
    //     return {
    //         ...state,
    //         currentPage: action.payload
    //     }
    // case SET_FETCH_ERROR:
    //     return {
    //         ...state,
    //         isFetchError: action.payload
    //     }
    default:
      return state;
  }
}

export const setIsBurgerActive = (bool) => ({
  type: SET_IS_BURGER_ACTIVE,
  payload: bool,
});
// export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
// export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
// export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})
// export const setFetchError = (bool) => ({type:SET_FETCH_ERROR, payload:bool})
