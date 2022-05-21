const SET_CATEGORIES = 'SET_CATEGORIES'


const initialState = {
    categories: []
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CATEGORIES:

            return {
                ...state,
                categories: [...state.categories, ...action.categories]
            }
        default:
            return state
    }
}

export const setCategories = (categories) => ({ type: SET_CATEGORIES, categories })


export default categoriesReducer