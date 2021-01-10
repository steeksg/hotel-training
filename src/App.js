import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";
import Navibar from "./components/navibar/navibar";

import MainPage from './pages/main'
import AboutPage from './pages/about'
import RoomServicesPage from './pages/roomServices'
import ServicesPage from './pages/roomServices'
import VacancyPage from './pages/vacancy'
import NewsPage from './pages/news'
import LicensesPage from './pages/licenses'
import ContractPage from './pages/contract'


export default function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/roomServices" component={RoomServicesPage} />
          <Route path="/services" component={RoomServicesPage} />
          <Route path="/vacancy" component={VacancyPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/licenses" component={LicensesPage} />
          <Route path="/contract" component={ContractPage} />
        </Switch>
      </Router>
    </>
  );
}
