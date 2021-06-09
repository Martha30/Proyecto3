import { AppBar, List, Toolbar, makeStyles, IconButton, Drawer, Divider, ListItemIcon, ListItem } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../images/logo.png"
import {Link, animateScroll as scroll} from "react-scroll"
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';



const links = [
    {
        id: "principal",
        text: "Acerca de mí",
        icon: <InfoTwoToneIcon fontSize="large"/>
    },
    {
        id: "habilidades",
        text: "Mis proyectos",
        icon: <EmojiObjectsIcon fontSize="large"/>
    },
    {
        id: "contacto",
        text: "Contacto",
        icon: <ContactMailIcon fontSize="large"/>
    },

]

const Navbar = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false)
    return (
        <>
        <AppBar position="sticky"className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo" />
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            {text}</Link>
                        ))
                    }
                </List>
                <IconButton edge="end" 
                    className={classes.menubutton}
                    onClick={()=>setOpen(!open)}
                >   
                <MenuIcon fontSize="large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                <IconButton onClick={()=>setOpen(false)}> 
                    <CancelIcon fontSize="large"/>
                </IconButton>
                <Divider/>
                {
                    links.map(({id, text,icon}, index)=>(
                        <Link key={index}
                            className={classes.sidebar} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                        </Link>
                        ))
                }
                
            </Drawer>
        </>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "turquoise",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },

    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        

    },

    logo: {
        height: "4rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },

    menu: {

        [theme.breakpoints.down("sm")]: {
            display:"none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor:"pointer",
            color: "black",
            borderBottom: "3px solid black",
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display:"block",
            color:"black",
            position: "absolute",
            top: 0,
            right: 10,

        }
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw"
        },
        "& h5": {
            margin: theme.spacing(10,0,0,4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "black",
            cursor:"pointer"
        }
    },





}))


export default Navbar