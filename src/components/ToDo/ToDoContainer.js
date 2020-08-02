import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';
import { setTodosAC, setShowDate, cangeCompletedTodoAC, addTodoAC, removeTodoAC, setValueTitleAC, setSelectedValueAC, } from '../../Redux/ToDo-reducer';

const ToDoContainer = (props) => {

   // useEffect(() => { 
   //    let setTodos = (setTodos) => {
   //       return setTodos(JSON.parse(localStorage.getItem("todoList")))
   //    }   
   //    setTodos(props.setTodosAC)                   
   // }, [props.setTodosAC])

   // useEffect(() => {    
   //    localStorage.setItem("todoList", JSON.stringify(props.todos)) 
   // }, [props.todos])


   return <ToDo {...props} todos={props.todos} />
}

let mapStateToProps = (state) => {
   return {
      todos: state.ToDo.todos,
      value: state.ToDo.valueTextarea,
      SelectedValue: state.ToDo.SelectedValue,
   }
}

const TodoContainer = connect(mapStateToProps, {
   setTodosAC,  cangeCompletedTodoAC, addTodoAC, removeTodoAC, setValueTitleAC,
   setSelectedValueAC, setShowDate,
})(ToDoContainer)

export default TodoContainer;
