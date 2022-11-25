import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './DetailsPage/detailsPage'
import './App.css'
import Inquires from './Inquires/Inquires';
import Teller from './Nader/Teller';
import Vault from './Nader/Vault/Vault';
import Cash from './Nader/Cash/Cash';
function App() {
  return (
    <>
    <Router>
          <Switch>
          <Route path="/teller" exact component={Teller}></Route>
          <Route path="/Vault" exact component={Vault}></Route>
          <Route path="/Cash" exact component={Cash}></Route>


            <Route path="/" exact component={DetailsPage}></Route>
            <Route path="/ABE" exact component={DetailsPage}></Route>
            <Route path="/detailspage" exact component={DetailsPage}></Route>
            <Route path="/inquires" exact component={Inquires}></Route>
            {/* <Route path="*"  component={DetailsPage}></Route> */}
          </Switch>
        </Router> 
    </>
  );
}

export default App;

