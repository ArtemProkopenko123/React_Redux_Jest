import React, { useContext } from 'react';
import TodoItem from '../todoItem/todoItem';

import { MyContext } from '../..';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';


const TodoListComp = (props) => {

    let mainData = ([ ...props.tasks.tasks, ...useContext(MyContext).tasks ]).sort((a, b) => {
        const idA = a.id, idB = b.id
        if (idA > idB) return -1;
        if (idA < idB) return 1;
        return 0;
    });

    return (

        <div>
            {mainData && mainData.length > 0 ?
                <>
                    <h3>List with context: </h3>
                    <Paper >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    {Object.keys(mainData[ 0 ]).map((row, idx) => (
                                        <TableCell align="center" key={idx}>{row}</TableCell>
                                    ))}
                                    <TableCell align="center">Remove</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {mainData.map((row, idx) =>
                                    <TableRow key={idx}>
                                        <TodoItem task={row} id={idx} />
                                    </TableRow>
                                )}

                            </TableBody>
                        </Table>
                    </Paper>
                </>
                : null
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    };
};



const TodoList = connect(mapStateToProps)(TodoListComp);

export default TodoList;