export const initialState = {
    notifications: [], //initialy there is notification that's why there is empty array 
};

const Reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_NOTIFICATIONS":
            //Logic
           return { 
               ...state, 
               notifications: [...state.notifications, action.item],
           }
           break;
           default:
               return;
    }
}

export default Reducer;