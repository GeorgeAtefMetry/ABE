import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './DetailsPage/detailsPage'
import './App.css'
function App() {
  return (
    <>
    <Router>
          <Switch>
            <Route path="/" exact component={DetailsPage}></Route>
            <Route path="/ABE" exact component={DetailsPage}></Route>
            <Route path="/DetailsPage" exact component={DetailsPage}></Route>
            <Route path="*"  component={DetailsPage}></Route>
          </Switch>
        </Router> 
    </>
  );
}

export default App;
