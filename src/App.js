import { useState, useEffect } from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Navibar from "./components/navibar/navibar";

import { testData } from "./simulationAPI";

import MainPage from "./pages/main";
import AboutPage from "./pages/about";
import RoomServicesPage from "./pages/roomServices";
import RestaurantPage from "./pages/restaurant";
import VacancyPage from "./pages/vacancy";
import NewsPage from "./pages/news";
import LicensesPage from "./pages/licenses";
import ContractsPage from "./pages/contracts";
import SupportPage from "./pages/support";
import TeamPage from "./pages/team";
import InvestorsPage from "./pages/investors";
import DocsPage from "./pages/docs";
import ContactsPage from "./pages/contacts";
import CommunitiesPage from "./pages/communities";
import RoomsPage from "./pages/rooms";
import RoomPage from "./pages/room";

import Footer from "./components/footer/footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [state, setState] = useState({
    rooms: testData,
    currentRoom: null,
    reserveData: {
      dates: { startDate: null, endDate: null },
      guests: { adult: 0, children: 0, babies: 0 },
    },
  });

  const handleChangeGuestsCount = (number, type) => {
    setState((prev) => ({
      ...prev,
      reserveData: {
        ...prev.reserveData,
        guests: { ...prev.reserveData.guests, [type]: number },
      },
    }));
  };

  const handleChangeDate = ({ startDate, endDate }) => {
  // const handleChangeDate = (date, type) => {
    // setState((prev) => ({
    //   ...prev,
    //   reserveData: {
    //     ...prev.reserveData,
    //     dates: { ...prev.reserveData.dates, [type]: date },
    //   },
    // }));

    setState((prev) => ({
      ...prev,
      reserveData: {
        ...prev.reserveData,
        dates: {
          ...prev.reserveData.dates,
          startDate: startDate,
          endDate: endDate,
        },
      },
    }));
  };


  const handleChangeCurrentRoom = (number) => {
    setState((prev) => ({ ...prev, currentRoom: number }));
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navibar />
        <Switch>
          <Route exact path="/">
            <MainPage
              reserveData={state.reserveData}
              handleChangeDate={handleChangeDate}
              handleChangeGuestsCount={handleChangeGuestsCount}
            />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/roomServices" component={RoomServicesPage} />
          <Route path="/restaurant" component={RestaurantPage} />
          <Route path="/vacancy" component={VacancyPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/licenses" component={LicensesPage} />
          <Route path="/contract" component={ContractsPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/investors" component={InvestorsPage} />
          <Route path="/docs" component={DocsPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/communities" component={CommunitiesPage} />
          <Route path="/rooms">
            <RoomsPage
              setCurrentRoom={handleChangeCurrentRoom}
              allRooms={state.rooms}
              reserveData={state.reserveData}
              handleChangeDate={handleChangeDate}
              handleChangeGuestsCount={handleChangeGuestsCount}
            />
          </Route>
          <Route path="/room/:number">
            <RoomPage
              allRooms={state.rooms}
              reserveData={state.reserveData}
              handleChangeDate={handleChangeDate}
              handleChangeGuestsCount={handleChangeGuestsCount}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
