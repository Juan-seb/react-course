import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
    db: null
}

export function crudReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA: {
            return {
                ...state,
                db: action.payload.map(data => data)
            }
        }
        case TYPES.CREATE_DATA: {
            console.log(action.payload)
            return{
                ...state,
                db: [...state.db,action.payload]
            }
        }
        case TYPES.UPDATE_DATA: {
            console.log(action.payload)
            return{
                ...state, /*Map the array to replace the new data in the old array and return  */
                db: state.db.map(el => action.payload.id === el.id ? action.payload : el)
            }
        }
        case TYPES.DELETE_DATA: {
            return{
                ...state, /*Delete the element of the array that coincide with the id(action.payload) to delete */
                db: state.db.filter(el => action.payload !== el.id)
            }
        }
        case TYPES.NO_DATA:
            return crudInitialState
        default:
            break;
    }
}