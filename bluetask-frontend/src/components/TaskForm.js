import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>Cadastro da tarefa</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='form-group'>
                        <label htmlFor='description'>Descrição</label>
                        <input type='text'
                            className='form-control'
                            name='description'
                            placeholder='Digite a descrição'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='whenToDo'>Data</label>
                        <input type='text'
                            className='form-control'
                            name='whenToDo'
                            placeholder='Digite a data'/>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-primary'>Cadastrar</button>
                    &nbsp;&nbsp;
                    <button type='button' className='btn btn-primary'>Cancelar</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;