import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector, getState } from "react-redux";
import { addCard } from "../../actions";
import CardTemplate from "../CardTemplate/CardTemplate";

export const CardList = () => {

  const dispatch = useDispatch();
  const ids = []

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          data.map((card) => {
            var found = 0
            ids.forEach((id) => {
              if(card.id === id){
                found = 1;
              }
            })
            if(found === 0) {
              dispatch(addCard(card))
              ids.push(card.id)
            }
          })
      });
  }, []);

  const add = useSelector(state => state.addCard)
  return add.map((card) => {
    return (
      <CardTemplate
      key={card.id}
      firstName={card.firstName}
      lastName={card.lastName}
      id={card.id}
      email={card.email}
      address={card.address.streetAndNumber}
      zipCode={card.address.postalCode}
      city={card.address.city}
      country={card.address.country}
      gender={card.gender}
      age={card.age}
      activityClass={card.activity_class}
    />
  );
  })
};
