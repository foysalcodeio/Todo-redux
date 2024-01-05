import React from 'react';

const Todolist = () => {
    return (
        <div className='container-fluid '>
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
                                <td>1</td>
                                <td> Foysal </td>
                                <td><button className='btn btn-sm btn-primary'>Edit</button></td>
                                <td><button className='btn btn-sm btn-danger'>Remove</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>           
        </div>
    );
};

export default Todolist;
