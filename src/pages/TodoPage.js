import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import Todolist from '../components/todo/Todolist';

const TodoPage = () => {
    return (
        <div className='container my-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h5>My Todo App</h5>
              </div>
              <div className='card-body'>
                <CreateTodo />
                <Todolist />
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default TodoPage;