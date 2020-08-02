import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
  
}));

export default function SearchAppBar() {
   const classes = useStyles();
   let [showMenu, setShowMenu] = useState(false)

   let onShowMenu = () => {
      setShowMenu(showMenu = !showMenu)
   }

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onShowMenu}
               >
                  <MenuIcon />
               </IconButton>
               <Typography className={classes.title} variant="h6" noWrap>
                  ToDo
               </Typography> 
            </Toolbar> 
         </AppBar>            
         <div className="headerContent" style={showMenu ? { top: '0' } : { top: '-1000px' }}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
            elit. Placeat dicta rem error provident deleniti, 
            perspiciatis nihil obcaecati possimus aut delectus 
            incidunt veniam laudantium quisquam adipisci optio 
            a quas maiores ducimus.</p>
         </div>        
      </div>
   );
}
