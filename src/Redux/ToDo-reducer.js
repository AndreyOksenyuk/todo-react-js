const CHANGE_COMPLETED_TODO = 'CHANGE_COMPLETED_TODO';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SET_VALUE_TITLE = 'SET_VALUE_TITLE';
const SET_SELECTE_VALUE = 'setChangeSelectedValue';
const SET_SHOW_DATE = 'SET_SHOW_DATE';
const SET_TODOS = 'SET_TODOS';

let initialState = {
   todos: [],
   valueTextarea: '',
   SelectedValue: '',
}

let Todo_reduser = (state = initialState, action) => {
   switch (action.type) {
      case SET_TODOS:
         return{
            ...state,
            todos: [...action.todos]
         }
      case CHANGE_COMPLETED_TODO:
         return {
            ...state,
            todos: [...state.todos.map(e => {
               if (e.id === action.id) {
                  e.completed = !e.completed
               }
               return { ...e }
            })
            ]
         }
      case ADD_TODO:
         if (state.valueTextarea) {
            let newTodo = {
               id: Date.now(),
               completed: false,
               title: state.valueTextarea,
               showDate: false,
            }
            return {
               ...state,
               todos: [...state.todos, newTodo],
               valueTextarea: '',
            }
         }
         return state
      case REMOVE_TODO:
         let newTodos = state.todos.filter(e => e.id !== action.id)
         return {
            ...state,
            todos: [...newTodos]
         }
      case SET_VALUE_TITLE:
         return {
            ...state,
            valueTextarea: action.value,
         }
      case SET_SELECTE_VALUE:
         return {
            ...state,
            SelectedValue: action.value,
         }
      case SET_SHOW_DATE:
         return {
            ...state,
            todos: [...state.todos.map(e => {
               if (e.id === action.id) {
                  e.showDate = !e.showDate
               }
               return { ...e }
            })
            ]
         }
      default:
         return state
   }
}

export let setTodosAC = (todos) => ({
   type: 'SET_TODOS',
   todos,
})
export let cangeCompletedTodoAC = (id) => ({
   type: 'CHANGE_COMPLETED_TODO',
   id,
})
export let addTodoAC = (text) => ({
   type: 'ADD_TODO',
   text,
})
export let removeTodoAC = (id) => ({
   type: 'REMOVE_TODO',
   id,
})
export let setValueTitleAC = (value) => ({
   type: 'SET_VALUE_TITLE',
   value,
})
export let setSelectedValueAC = (value) => ({
   type: 'setChangeSelectedValue',
   value,
})
export let setShowDate = (id) => ({
   type: 'SET_SHOW_DATE',
   id
})

export default Todo_reduser;