import React from 'react';
import { Component } from 'react';
import MyContext from './store'
class Todos extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    data => (
                        <React.Fragment>
                            <input type='text' onChange={data.getTodoValue} value={data.todo.name} />
                            <button onClick={data.add}>{data.todo.edit ? 'Update' : 'Add'}</button>
                            {
                                data.todos.map((value, index) => (
                                    <div key={index}>
                                        <p style={{ display: 'inline' }}>{value.name}</p>
                                        <button style={{ display: 'inline' }} onClick={() => data.delete(index)} disabled={data.todo.edit}>Delete</button>
                                        <button style={{ display: 'inline' }} onClick={() => data.edit(value, index)} disabled={data.todo.edit}>Edit</button>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    )
                }
            </MyContext.Consumer>
        );
    }
}

export default Todos;
