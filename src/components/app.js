import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import Car from "../assets/img/car.jpg";
import Spinner from "./Spinner";


class App extends React.Component {
    state = {
      showPaypal: false
    };
  
    showPaypalButtons = () => {
      this.setState({ showPaypal: true });
    };
  
    render() {
      const { showPaypal } = this.state;
      if (showPaypal) {
        return <PaypalButtons />;
      } else {
        return (
          <div className="main">
            <h2> Buy this Mercedes at a giveaway price (Super Cheap) </h2>
            <img alt="Mercedes G-Wagon" src={Car} />
            <h3>
              <b>$200</b>
            </h3>
            <button onClick={this.showPaypalButtons}> Pay </button>
          </div>
        );
      }
    }
  }
  
  export default App;



/*
Other method:

<div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>
*/