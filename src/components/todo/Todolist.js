import React from 'react';

const Todolist = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'> 
                        <thead> 
                            <tr> 
                                <th>No.</th>
                                <th> Task Name </th>
                                <th> Edit </th>
                                <th> Remove </th>
                            </tr>
                        </thead>

                        <tbody> 
                            <tr> 
                                <th>1</th>
                                <th> Foysal </th>
                                <th><button className='btn btn-sm btn-primary'>Edit</button></th>
                                <th><button className='btn btn-sm btn-danger'>Remove</button></th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>           
        </div>
    );
};

export default Todolist;
