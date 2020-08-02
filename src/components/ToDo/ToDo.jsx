import React from 'react';
import './ToDo.scss'
import TodoItem from './TodoItem';
import AddTodo from './addTodo';
import NativeSelects from './TodoItem/selectorCompleted';

const ToDo = (props) => {
   return (
      <div className='ToDo'>
         <AddTodo 
            addTodoAC={props.addTodoAC}
            setValueTitle={props.setValueTitleAC}
            value={props.value}
         />
         <NativeSelects setSelectedValue={props.setSelectedValueAC}/>
         <TodoItem 
            todos={props.todos}
            cangeCompleted={props.cangeCompletedTodoAC}
            removeTodoAC={props.removeTodoAC}
            SelectedValue={props.SelectedValue}
            setShowDate={props.setShowDate}
         />

      </div>
   );
}

export default ToDo;
