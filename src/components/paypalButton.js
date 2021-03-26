import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import Car from "../assets/img/car.jpg";
import Spinner from "./Spinner";
import PaypalButton from '../components/paypalButton'

const CLIENT = {
    sandbox: "AR2bFdQ8M7grCNgIx5HdQ39n5P5zz0FwBOz0scDKq9gdhabYeoK7M1Cp4QyHGeM76wR8wSEuXCOtPjE1",
    production: "your_production_key"
};

const CLIENT_ID = CLIENT.sandbox;
//process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
    constructor(props) {
            super(props);

            this.state = {
                showButtons: false,
                loading: true,
                paid: false
            };

            window.React = React;
            window.ReactDOM = ReactDOM;
        }
        //...
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);