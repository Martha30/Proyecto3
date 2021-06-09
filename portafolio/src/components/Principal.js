import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import foto from "../images/foto.jpeg"
import TypeWriterEffect from "react-typewriter-effect"

const Principal = ({title, dark, id}) => {
    const classes = useStyle();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={foto} className={classes.media} title="picture"/>
                    <CardContent className={classes.CardContent}>
                        <TypeWriterEffect
                            text= " Hola, soy Laurelinda Gómez "
                            textStyle={{fontSize: "1.5rem", fontWeight: "700px", color: "tomato"}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />

                       
                        <Typography variant="h6" color="textSecondary">
                            Soy de Quetzaltenango, Guatemala. Actualmente estudio la carrera de Ingeniería en Ciencias de la Computación 
                            y Tecnologías de Información en Universidad Del Valle de Guatemala. Mis pasatiempos favoritos 
                            son; el arte, cocinar, leer, bailar y jugar ajedrez. Disfruto mucho el tiempo en familia porque es algo muy importante 
                            para mí. Me gusta realizar Freelance porque disfruto investigar y leer acerca de nuevos temas. 
                        </Typography>


                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "40vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    media: {
        width: "700px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("5m")]: {
                display: "none",

            }
        },
    }
}))

export default Principal