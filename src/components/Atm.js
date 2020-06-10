// Imports
import React from 'react';
import { connect } from 'react-redux';

import {depositFiftyActionCreator} from '../store/reducers/bankReducer';

// Component -- functional props needs to be a parameter so we can access props
function Atm(props) {
  console.log({ props });

  return (
    <div className="atm">
      <div className="terminal">
        <h1 className="balance">$ {props.balance}</h1>
      </div>

      <div className="terminal">
        <button type="button" onClick={() => props.depositFiftyAction() }>
          Deposit $ 50
        </button>

        <button type="button" onClick={() => console.log('Withdraw $ 50')}>
          Withdraw $ 50
        </button>

        <button type="button" onClick={() => console.log('Deposit $ 100')}>
          Deposit $ 100
        </button>

        <button type="button" onClick={() => console.log('Withdraw $ 100')}>
          Withdraw $ 100
        </button>
      </div>
    </div>
  );
}

// Container to handle reading (mapState) and writing (mapDispatch) in regards to the redux store;
// I want to be able to react with that reducer function

const mapStateToProps = state => {
  console.log('state in mapStateToProps: ', state);

  return {
    // make the balance accesible to the component. Retrieve it from the state.
    balance: state.bank.balance,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch in mapDispatchToProps: ', dispatch);

  return {
    // dispatch the action creator so it can be used
    // dispatching creator, you get the pure function as a result
    depositFiftyAction() {
      dispatch(depositFiftyActionCreator())
      // action will be mapped into props
    }

  };
};
// Please refactor mapStateToProps and mapDispatchToProps into implicitly returning functions rather than explicitly returning ones once you get everything up and running

// Establish a connection to the Redux store from this component
// Merge 'this.props' object of the component and object returned from mapState
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Atm);
