

const initialState = []


export const themeReducer = (state=initialState, action) =>{
    if(action.type=='change theme'){
        return action.payload
    }
    return state

}