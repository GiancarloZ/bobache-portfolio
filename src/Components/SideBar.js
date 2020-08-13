import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { makeStyles, useTheme  } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Hidden from '@material-ui/core/Hidden';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
    maxWidth: 200
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideBar = props => {
  const { history, window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
    history.push("/projects")
  };
  const handleOnClick = () => {
    history.push("/projects")
  }

  const handleClickContact = () => {
    history.push("/contact")
  }
  const handleClickAbout = () => {
    history.push("/about")
  }
  const data = [
    {name: "SONIDO TROPICO SANTO DOMINGO", onClick: () => history.push(`/projects/1`)}, 
    {name: "NIGHT OF THE JACKAL 2016", onClick: () => history.push(`/projects/2`)},
    {name: "PERMISSION TO RELAX", onClick: () => history.push(`/projects/3`)}, 
    {name: "The Pineapple Ball 2016", onClick: () => history.push(`/projects/4`)}, 
    {name: "The Colony Honey Co.", onClick: () => history.push(`/projects/5`)}, 
    {name: "Bright Island Outreach - Cotui", onClick: () => history.push(`/projects/6`)}
  ]      
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
              <Button component="h1" style={{fontSize: "1.5rem"}} color="inherit" onClick={handleOnClick}> BOB HACHE</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
<Hidden smUp implementation="css">
<Drawer
  container={container}
  variant="temporary"
  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
  open={mobileOpen}
  onClose={handleDrawerToggle}
  classes={{
    paper: classes.drawerPaper,
  }}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
>
    {/* <Button variant="h5"  onClick={handleOnClick}>
        Bob Hache
    </Button> */}

    <List>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Projects" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {data.map((item) => {
                return(
                <List component="div" disablePadding>
                <ListItem button={true} className={classes.nested} onClick={item.onClick}>
                    <ListItemText primary={item.name} />
                </ListItem>
                </List>
                )})
                }
            </Collapse>
        <ListItem button onClick={handleClickAbout}>
            <ListItemText primary="About"  />
        </ListItem>
        <ListItem button onClick={handleClickContact} >
            <ListItemText primary="Contact"  />
        </ListItem>
    </List>
    </Drawer>
    </Hidden>
     <Hidden xsDown implementation="css">
     <Drawer
       classes={{
         paper: classes.drawerPaper,
       }}
       variant="permanent"
       open
     >
         <List>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Projects" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {data.map((item) => {
                return(
                <List component="div" disablePadding>
                <ListItem button={true} className={classes.nested} onClick={item.onClick}>
                    <ListItemText primary={item.name} />
                </ListItem>
                </List>
                )})
                }
            </Collapse>
        <ListItem button onClick={handleClickAbout}>
            <ListItemText primary="About"  />
        </ListItem>
        <ListItem button onClick={handleClickContact} >
            <ListItemText primary="Contact"  />
        </ListItem>
    </List>
     </Drawer>
   </Hidden>
   </nav>
</>
  );
};

export default withRouter(SideBar);

{/* <nav className={classes.drawer} aria-label="mailbox folders">
<Hidden smUp implementation="css">
<Drawer
  container={container}
  variant="temporary"
  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
  open={mobileOpen}
  onClose={handleDrawerToggle}
  classes={{
    paper: classes.drawerPaper,
  }}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
>
    <Button variant="h5"  onClick={handleOnClick}>
        Bob Hache
    </Button>

    <List>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Projects" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {data.map((item) => {
                return(
                <List component="div" disablePadding>
                <ListItem button={true} className={classes.nested} onClick={item.onClick}>
                    <ListItemText primary={item.name} />
                </ListItem>
                </List>
                )})
                }
            </Collapse>
        <ListItem button onClick={handleClickAbout}>
            <ListItemText primary="About"  />
        </ListItem>
        <ListItem button onClick={handleClickContact} >
            <ListItemText primary="Contact"  />
        </ListItem>
    </List>
    </Drawer>
    </Hidden>
     <Hidden xsDown implementation="css">
     <Drawer
       classes={{
         paper: classes.drawerPaper,
       }}
       variant="permanent"
       open
     >
         <List>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Projects" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {data.map((item) => {
                return(
                <List component="div" disablePadding>
                <ListItem button={true} className={classes.nested} onClick={item.onClick}>
                    <ListItemText primary={item.name} />
                </ListItem>
                </List>
                )})
                }
            </Collapse>
        <ListItem button onClick={handleClickAbout}>
            <ListItemText primary="About"  />
        </ListItem>
        <ListItem button onClick={handleClickContact} >
            <ListItemText primary="Contact"  />
        </ListItem>
    </List>
     </Drawer>
   </Hidden>
   </nav> */}