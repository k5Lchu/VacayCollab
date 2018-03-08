export default function MarkReducer(state=[], action) {
    /**
     * Should treat state as immutable since we
     * save the states before each change
     */
    const newState = {state};
    switch(actions.type){
        case "SelectDay": {
            newState.selectDayPass(action.payload);
            break;
        }
    }
    return newState;
};