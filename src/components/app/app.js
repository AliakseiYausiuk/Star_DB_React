import React, { Component } from "react";

import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <RandomPlanet />

          <div className="button-row">
            <ErrorButton />
          </div>

          <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
          <Row left={<PlanetList />} right={<PlanetDetails itemId={4} />} />
          <Row left={<StarshipList />} right={<StarshipDetails itemId={2} />} />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
