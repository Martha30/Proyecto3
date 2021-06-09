import React from 'react'
import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'

const Contacto = ({title, dark, id}) => {
    const classes = useStyle();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.title}>
                        <Typography variant="h5"> Ingresar Datos</Typography>
                        
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField label="Nombre"/>
                        <TextField label="Correo Electrónico"/>
                        <TextField label="Mensaje"/>
                    </form>
                    <Button variant="contained">
                        Enviar
                    </Button>
                </Paper>
            </div> 
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        padding: theme.spacing(25)
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    root: {
        
        color: "#333",
        background: "turquoise",
        marginTop: theme.spacing(4),
        fontSize: "1.2rem",
        maxWidth: "500px",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: "#fff",
            color: "turquoise",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4),
        }
        
    },
    
    sectioncontent: {
        maxWidth: "200vw",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",     
    },
    tittle: {
        "& h5": {
            marginTop: theme.spacing(4),
        }
    },
    form: {
        display: "flex",
        flexDirection: "column",
    }

   
}))


export default Contacto