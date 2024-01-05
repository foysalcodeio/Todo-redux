import React from 'react';

const CreateTodo = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className=' w-50 col-md-10'>
                    <input placeholder='task name' type='text' className='form-control' />
                    <button className='my-2 btn btn-dark'> Add to do</button>
                </div>
                <div className='card-body'>

                </div>
            </div>
            
        </div>
    );
};

export default CreateTodo;