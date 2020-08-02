import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../ToDo.scss'


const GreenCheckbox = withStyles({
   root: {
      color: green[400],
      '&$checked': {
         color: green[600],
      },
   },
   checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {

   const handleChange = () => {
      props.changeCompleted(props.todo.id)
   };

   return (
         <div className='checkbox'>
         <FormControlLabel className={props.todo.completed ? 'Todo-completed' : 'Todo-nocompleted'}
               control={<GreenCheckbox checked={props.todo.completed} onChange={handleChange} name="checkedG" />}
               label={props.todo.title} 
            />
         </div>
         
   );
}
