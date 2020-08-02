import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
}));

export default function NativeSelects(props) {
   const classes = useStyles();
   let onSelect = (event) => {
      props.setSelectedValue(event.target.value)
   }

   return (
      <div>
         <FormControl className={classes.formControl}>
            <NativeSelect
               onChange={onSelect}
               className={classes.selectEmpty}
            >
               <option value={'all'}>All</option>
               <option value={'completed'}>Completed</option>
               <option value={'notCompleted'}>No completed</option>
            </NativeSelect>
            <FormHelperText>Todo completed status</FormHelperText>
         </FormControl>   
      </div>
   );
}
