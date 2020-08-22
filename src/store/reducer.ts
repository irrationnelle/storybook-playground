import {actions} from './actions';

const taskStateReducer = (taskState: string) => (
        state: { tasks: { id: string; title: string; state: string }[] },
        action: { type: string; id: string }
) => ({
        ...state,
        tasks: state.tasks.map(task =>
            task.id === action.id ? { ...task, state: taskState } : task
        )
    })
    

const initialState = {
tasks:[
    { id: "1", title: "Something", state: "TASK_INBOX" },
    { id: "2", title: "Something more", state: "TASK_INBOX" },
    { id: "3", title: "Something else", state: "TASK_INBOX" },
    { id: "4", title: "Something again", state: "TASK_INBOX" }
] };

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer("TASK_ARCHIVED")(state, action);
        case actions.PIN_TASK:
            return taskStateReducer("TASK_PINNED")(state, action);
        default:
            return state;
    }
};


export default reducer;
