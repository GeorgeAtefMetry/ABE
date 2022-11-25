import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './DetailsPage/detailsPage'
import './App.css'
import Inquires from './Inquires/Inquires';
import PaymentOrder from './PO/PO';
import DemandDraft from './DD/DD';
import Teller from './Nader/Teller'
function App() {
  return (
    <>
    
    <Router>
      
          <Switch>
          <Route path="/teller" exact component={Teller}></Route>

            <Route path="/" exact component={DetailsPage}></Route>
            <Route path="/ABE" exact component={DetailsPage}></Route>
            <Route path="/detailspage" exact component={DetailsPage}></Route>
            <Route path="/inquires" exact component={Inquires}></Route>
            <Route path="/paymentOrder" exact component={PaymentOrder}></Route>
            <Route path="/demandDraft" exact component={DemandDraft}></Route>
            {/* <Route path="*"  component={DetailsPage}></Route> */}
          </Switch>
        </Router> 
    </>
  );
}

export default App;
