import * as React from "react";
import 'antd/dist/antd.css';
import "./styles.css";
import "./App.css";
// import Layout from "./components/Layout/Layout";
import Layout from './Main'
import Home from "./Pages/Home";
import { BackTop } from 'antd';
// import { Helmet } from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './Pages/Dashboard'
// import User from "./Pages/User";
import Register from "./Pages/Register/Register";



export default function App() {
  return (
    <div id="layout">
      <div className="App">
        {/* <Helmet>
          <title>Wearable bands to detect  coronavirus subjects | IoT and RFID based smart bands for quarantine monitoring | Quarantine tracking wristbands | Cordonoff</title>

          <meta name="google-site-verification" content="0dW0-zTXBu-cNlRoEXEUB69G8AWK0EMKl5DBChh4oBQ" />

          <meta name="title" content="Wearable bands to detect  coronavirus subjects | IoT and RFID based smart bands for quarantine monitoring | Quarantine tracking wristbands | Cordonoff" />
          <meta name="description" content="Cordonoff empowers agencies using Wearable bands with IoT and RFID technologies to monitor the movement of Subjects from geo-fenced Quarantine location in COVID-19 involving 4 functions: Enroll, Activate, Monitor and Alert" />

        </Helmet> */}
        <Router >
          <Switch>
            <Layout>
              <BackTop />
              <Route exact path="/home" component={Home} />
              <Route path="/my-dashboard/:id" component={Dashboard} />
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/user/:id" component={User} /> */}
              <Route exact path="/registraion/:id" component={Register} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
