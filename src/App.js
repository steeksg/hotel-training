import { useState, useEffect, useRef } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";
import Navibar from "./components/navibar/navibar";

// import { currentRoomData } from "./simulationAPI";
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
import { Button } from "react-bootstrap";

export default function App() {
  // const [rooms, setRooms] = useState(testData);
  // const [isLoad, setIsLoad] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(1);

  // const currentRoom = useRef(1);
  // const setCurrentRoom = (index) => {
  //   currentRoom.current = index;
  // };

  // useEffect(() => {
  //   if (!isLoad) {
  //     setRooms(testData);
  //     setIsLoad(true);
  //   }
  // });

  const handleChangeCurrentRoom = (number) => {
    setCurrentRoom(number);
  };

  return (
    <>
      <Navibar />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
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
              allRooms={testData}
              currentRoom={currentRoom}
            />
          </Route>
          <Route path="/room">
            {/* {console.log(testData.find((item) => item.number === currentRoom))} */}
            <RoomPage
              room={testData.find((item) => item.number === currentRoom)}
              // room={rooms[0]}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
      <Button onClick={() => console.log(currentRoom)} />
    </>
  );
}
