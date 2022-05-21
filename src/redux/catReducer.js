import { catsAPI } from "../api/api"
const SET_CATS = 'SET_CATS'
const ADD_CATS = 'ADD_CATS'

const initialState = {
    images: []
}

const catReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case SET_CATS: 
        
        return {
            ...state, 
            images: [...state.images, ...action.pics]
        }
        case ADD_CATS: 
        return {
            ...state,
            images: [...state.images, action.images]
        }
        default:
            return state
    }
}

export const setCats = (pics) => ({type: SET_CATS, pics})

// export const getCatsTC = (pageSize) => {
//     return (dispatch) => {
//         catsAPI.getPics(pageSize).then(data => {
//             dispatch(setCats(data.map(d => d.url)))
//         }).catch(console.error('error1'))
//     }
// }


export default catReducer