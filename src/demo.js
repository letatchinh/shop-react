

const rootReducer = (state = 0,action) => {
switch (action.type) {
    case "INCREASE":
        return {
            ...state, state : state + 1
        }
        break;

    default:
        break;
}
}
// Action

const INCREASE = {
    type : "INCREASE" ,
    payload : 10
}

const increament = (data) => {
    return {
        type : "INCREASE" ,
        payload : data
    }
}
