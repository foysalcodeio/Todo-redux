import React from 'react';

const CreateTodo = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <input placeholder='task name' type='text' className='form-control' />
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-dark'> Add To-Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;