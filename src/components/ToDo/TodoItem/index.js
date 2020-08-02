import React from 'react';
import '../ToDo.scss';
import RemoveTodo from '../RemoveTodo'
import GreenCheckbox from './checkbox'
import DateSVG from './dateSVG'

const TodoItem = (props) => {

   let showDateTime = (id) => {
      props.setShowDate(id)
   }

   let todos = props.todos
   if (props.SelectedValue === 'all') {
      todos = props.todos
   }
   else if (props.SelectedValue === 'completed') {
      todos = props.todos.filter(e => e.completed === true)
   }
   else if (props.SelectedValue === 'notCompleted') {
      todos = props.todos.filter(e => e.completed === false)
   }

   return (
      <div className='todoItems'>
         {todos.length > 0
            ? <div>
               {todos.map((todo, index) => {
                  return (
                     <div key={todo.id} className="todoItems__inner">
                        <span className='todoNum'>{index + 1}</span>
                        <GreenCheckbox
                           todo={todo}
                           changeCompleted={props.cangeCompleted}
                        />

                        <RemoveTodo id={todo.id} removeTodoAC={props.removeTodoAC} />
                        <div className="calendarIco" onClick={() => showDateTime(todo.id)}>
                           <DateSVG showDate={todo.showDate} />
                        </div>
                        <p className='Date' style={todo.showDate ? { top: '-42px' } : { top: 0 }}>{("" + (new Date(todo.id)).toLocaleString())}</p>
                     </div>
                  )
               })
               }
            </div>

            : <p className='NoTasks'>No tasks!!!</p>


         }


      </div>
   );
}

export default TodoItem;
