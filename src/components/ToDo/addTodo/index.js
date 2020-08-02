import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddTodo = (props) => {

const classes = useStyles();

   let addTodo = (event) => {
      event.preventDefault()
      props.addTodoAC()
   }
let changeTitle = (event) => {
   props.setValueTitle(event.target.value)
}

   return (
      <div>
         <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Your task"  
               value={props.value}
               onChange={changeTitle}
            />
            <Button variant="contained" color="primary" type='submit' onClick={addTodo}>add task</Button>
         </form>   
      </div>
   );
}

export default AddTodo;
