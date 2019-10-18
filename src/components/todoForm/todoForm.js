import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { MyContext } from '../..';

import { connect } from 'react-redux';
import { reduxAddTask } from '../../redux/actions/tasks';



const INITIAL_STATE = {
    id: null,
    TaskText: '',
    Quantity: '',
    dataStore: ''
}

class TodoFormComp extends Component {

    state = {
        ...INITIAL_STATE
    }

    handleSubmit = (callback, dataStore) => {
        let state = this.state;
        state.id = Date.now();
        state.dataStore = dataStore;
        callback({ ...state })
        this.setState({ ...INITIAL_STATE })
    }

    handleChange = (target) => {
        this.setState({
            [ target.name ]: target.value
        });
    }
    render() {
        const { TaskText, Quantity } = this.state;
        const isValidate = TaskText !== '' && Quantity !== '' ? false : true;

        return (
            <div >
                <MyContext.Consumer>
                    {({ contextAddTask }) => (
                        <Grid>

                            <h3>Add Task</h3>
                            <div>
                                <TextField
                                    name="TaskText"
                                    label="Task Name"
                                    value={this.state.TaskText}
                                    onChange={(e) => this.handleChange(e.target)}
                                />
                            </div>
                            <div>
                                <TextField
                                    type="number"
                                    name="Quantity"
                                    label="Quantity"
                                    value={this.state.Quantity}
                                    onChange={(e) => this.handleChange(e.target)}
                                />
                            </div>
                            <div >
                                <br />
                                <Grid container direction="row" justify="center" spacing={2}>
                                    <Grid item >
                                        <Tooltip title={isValidate ? "Please enter Task Name" : ""}>
                                            <div>
                                                <Button onClick={(e) => this.handleSubmit(contextAddTask, 'context')} color="primary" type="button" variant="contained" disabled={isValidate}>Add to Context </Button>
                                            </div>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item >
                                        <Tooltip title={isValidate ? "Please enter Task Name" : ""}>
                                            <div>
                                                <Button onClick={(e) => this.handleSubmit(this.props.reduxAddTask, 'redux')} color="primary" type="button" variant="contained" disabled={isValidate}>Add to Redux Store</Button>
                                            </div>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    )}</MyContext.Consumer>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        reduxAddTask: (data) => {
            dispatch(reduxAddTask(data))
        }
    }
}
const TodoForm = connect(null, mapDispatchToProps)(TodoFormComp);

export default TodoForm;