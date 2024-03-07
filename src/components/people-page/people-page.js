import React, { Component } from "react";

import "./people-page.css";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {
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
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
