

export function reduxDeleteTask(id) {
    return {
        type: 'TASK_DELETE',
        id: id
    };
}

export function getTasks() {
    return {
        type: 'TASKS_GET_DATA_SUCCESS'
    };
}

export function reduxAddTask(task) {
    return {
        type:   'ADD_TASK',
        data:   task
    };
}

export function tasksIsLoading(bool) {
    return {
        type: 'TASKS_IS_LOADING',
        isLoading: bool
    };
}