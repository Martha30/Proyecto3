import { makeStyles} from "@material-ui/core";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Principal from "./components/Principal";

function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar/>
      <Principal title="Acerca de mí" id="principal" dark={true}/>
      <Habilidades title="Mis Proyectos" id="habilidades" dark={true}/>
      <Contacto title="Contacto" id="contacto" dark={true}/>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  
  root: {

  }
}))
export default App;
