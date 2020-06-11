// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  depositFiftyActionCreator,
  depositHundredActionCreator,
  depositCustomAmountActionCreator,
  withdrawFiftyActionCreator,
  withdrawHundredActionCreator,
  withdrawCustomAmountActionCreator,
} from '../store/reducers/bankReducer';

// Component -- refactor Atm component from functional to class component
// in that way we will be able to manage locate state
// and such, we can manage the state of user input then use it in redux store
class Atm extends Component {
  constructor() {
    super();
    this.state = {
      customAmount: '',
      validCustomAmount: true,
      disabledCustomAmount: true,
    };
  }

  handleChange(event) {
    const curCustomAmount = event.target.value;

    if(!isNaN(curCustomAmount) && curCustomAmount.length !== 0) {
      this.setState({ 
        // parseInt or cast string to a number
        customAmount: Number(curCustomAmount),
        validCustomAmount: true,
        disabledCustomAmount: false, 
      });
    } else {
      this.setState({ 
        validCustomAmount: false,
        disabledCustomAmount: true,
      }); 
    }
  }


  render() {

    console.log(this.props);

    return (
      <div className="atm">
        <div className="terminal">
          <h1 className="balance">$ {this.props.balance}</h1>
        </div>

        <div className="terminal">
          <button type="button" onClick={() => this.props.depositFiftyAction()}>
            Deposit $ 50
        </button>

          <button type="button" onClick={() => this.props.withdrawFiftyAction()}>
            Withdraw $ 50
        </button>

          <button type="button" onClick={() => this.props.depositHundredAction()}>
            Deposit $ 100
        </button>

          <button type="button" onClick={() => this.props.withdrawHundredAction()}>
            Withdraw $ 100
        </button>
        </div>

        <div className="terminal">
          <div className="custom-amount-container">
            <input
              className="custom-amount-containee"
              type="text"
              placeholder="Enter Custom Amount"
              required
              onChange={event => this.handleChange(event)}
            />
          </div>

          <button
            type="button"
            value="Deposit"
            disabled={this.state.disabledCustomAmount}
            onClick={() => this.props.depositCustomAmountAction(this.state.customAmount)}
          >
            Deposit $
        </button>

          <button
            type="button"
            value="Withdraw"
            disabled={this.state.disabledCustomAmount}
            onClick={() => this.props.withdrawCustomAmountAction(this.state.customAmount)}
          >
            Withdraw $
        </button>
        </div>

        {this.state.validCustomAmount ? null : 
        <div className="terminal">Invalid Custom Amount! Please Try Again.</div>}
      </div>
    );
  }
}

// Container to handle reading (mapState) and writing (mapDispatch) in regards to the redux store;
// I want to be able to react with that reducer function

const mapStateToProps = state => {
  console.log('state in mapStateToProps: ', state);

  return {
    balance: state.bank.balance,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch in mapDispatchToProps: ', dispatch);

  return {
    depositFiftyAction() {
      dispatch(depositFiftyActionCreator());
    },
    depositHundredAction() {
      dispatch(depositHundredActionCreator());
    },
    depositCustomAmountAction(customAmount) {
      dispatch(depositCustomAmountActionCreator(customAmount));
    },
    withdrawFiftyAction() {
      dispatch(withdrawFiftyActionCreator());
    },
    withdrawHundredAction() {
      dispatch(withdrawHundredActionCreator());
    },
    withdrawCustomAmountAction(customAmount) {
      dispatch(withdrawCustomAmountActionCreator(customAmount));
    },
  };
};
// Please refactor mapStateToProps and mapDispatchToProps into implicitly returning functions rather than explicitly returning ones once you get everything up and running

// Establish a connection to the Redux store from this component
// Merge 'this.props' object of the component and object returned from mapState
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Atm);
