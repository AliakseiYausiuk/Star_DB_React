import React, { Component } from "react";

import "./people-page.css";

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import PersonDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import ItemDetails from "../item-details/item-details";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 11,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getData}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = <ItemDetails personId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
