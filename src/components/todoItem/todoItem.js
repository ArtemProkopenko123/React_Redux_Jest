import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { MyContext } from '../..';

import { connect } from 'react-redux';
import { reduxDeleteTask } from '../../redux/actions/tasks';


const TodoItemComp = (props) => {

    return (
        <>
            <MyContext.Consumer>
                {({contextRemoveItem}) => (
                    <> 
                        {Object.keys(props.task).map((task, idx) => (
                            <TableCell align="center" key={idx}>
                                {props.task[ task ]}
                            </TableCell>
                        ))}
                        <TableCell align="center">
                            <IconButton onClick={() =>{return props.task.dataStore === "redux" ? props.reduxDeleteTask(props.task.id) : contextRemoveItem(props.task.id)}} edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </>
                )}
            </MyContext.Consumer>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxDeleteTask: (id) => {
            dispatch(reduxDeleteTask(id))
        }
    }
}

const TodoItem = connect(null, mapDispatchToProps )( TodoItemComp );

export default TodoItem;