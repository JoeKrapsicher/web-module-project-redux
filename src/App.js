import React from 'react';
import { connect } from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';



//1: ✔️ Set up "empty" reducer and initial state

//2: ✔️ Set up store and Provider

//3: ✔️ Connect components

//4: Add events and event handlers in UI

//5: Build action creators

//6: Rinse and Repeat

//Goals: ✔️ ❌
// ✔️- Move the given state to the reducer as the initial state for the Redux store
// ❌- Set up the Redux flow
// ❌- User should be able to add features to their car
// ❌- User should be able to remove added features from car
// ❌- Total should update as user adds removes features from their car


//TURNS OUT YOU CAN ONLY HAVE MAPSTATETOPROPS OUTSIDE THE COMPONENT

//3: ✔️ Connect components

const mapStateToProps = state => {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

const App = (props) => {


// use mapStateToProps to prop drill state into App



  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );


};

// connect to state with connect
export default connect(mapStateToProps, {})(App);
