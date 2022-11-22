import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './DetailsPage/detailsPage'
import './App.css'
import Inquires from './Inquires/Inquires';
function App() {
  return (
    <>
    <Router>
          <Switch>
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
