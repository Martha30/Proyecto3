import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import Data from "../Data"

const Habilidades = ({title, dark, id}) => {
    const classes = useStyle();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title} </Typography>
                <Grid container className={classes.grid}>
                    {
                        Data.map(({title,image,link}, index) => (
                            <Grid item key={index} xs={6} sm={6} md={6}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} className ={classes.caratula} titulo="caratula"/>
                                    <CardContent>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
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
        maxWidth: "60vw",
        margin: "0 auto",
        padding: theme.spacing(1),
        "& h3": {
            marginRight: theme.spacing(-30),
        }
    },
    grid: {
        marginTop: theme.spacing(2),
    },
    card: {
        maxWidth: 345,
        minHeight: 275,
        margin:theme.spacing(3),
    },
    caratula: {
        height: 0,
        paddingTop: '60%', 
    }

}))

export default Habilidades