

const INITIAL_STATE = [
    {
        id: 15713863333,
        TaskText: 'One',
        Quantity: '1',
        dataStore: 'redux'
    },
    {
        id: 15713863334,
        TaskText: 'Two',
        quantity: '2',
        dataStore: 'redux'
    },
    {
        id: 15713863335,
        TaskText: 'Tree',
        Quantity: '3',
        dataStore: 'redux'
    }
]


export  const tasks = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TASKS_GET_DATA_SUCCESS':
            return state.concat({...INITIAL_STATE})
        case 'ADD_TASK':
            return [ {...action.data}, ...state]
        case 'TASK_DELETE':
            return state.filter((task) => task.id !== action.id)
        case 'SELECT_DATA_STORE':
            return state

        default:
            return state
    }
}

