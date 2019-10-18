import React from 'react';
import TodoList from './../todoList/todoList';
import TodoForm from './../todoForm/todoForm';

const Home = () => {
    return ( 
        <div>
            <TodoForm />
            <TodoList />
        </div>
     );
}
 
export default Home;