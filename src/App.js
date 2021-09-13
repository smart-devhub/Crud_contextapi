import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import Home from './components/Home';
import GlobalStateProvider from './context/GlobalState';


function App() {
  return (
    <div className="App" style={{maxWidth:'30rem', margin:'20px auto'}}>
      <GlobalStateProvider>
      <BrowserRouter>
      <Switch>
     <Route exact path="/"  component={Home} />
     <Route path="/add" component={Adduser} />
     <Route path="/edit/:id" component={Edituser}/>
     </Switch>
     </BrowserRouter>
     </GlobalStateProvider>
    </div>
  );
}

export default App;
