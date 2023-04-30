interface AddList {
    type: 'ADD_LIST';
    payload: string;
}

interface AddTaskPayload {
    text: string;
    listId: string;
}

interface AddTask {
    type: 'ADD_TASK';
    payload: AddTaskPayload;
}

export type Action =
    |AddList
    |AddTask;

export const addTask = (args: AddTaskPayload): Action => {
    const {text, listId} = args;
    return {type: "ADD_TASK", payload: {text, listId}};
};

export const addList = (title: string): Action => ({type: "ADD_LIST", payload: title});