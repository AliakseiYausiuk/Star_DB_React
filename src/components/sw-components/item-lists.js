import React from "react";

import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const ListWithChildren = withChildFunction(ItemList, ({ name }) => (
  <span>{name}</span>
));

const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets);
const StarshipList = withData(ListWithChildren, getAllStarships);

export { PersonList, PlanetList, StarshipList };
