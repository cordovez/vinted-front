import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const Payment = () => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const stripe = useStripe();
  const elements = useElements();
  const customer = "";
  const [completed, setCompleted] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Get card details ...

      const cardElement = elements.getElement(CardElement);
      // Ask for a token via Stripe's API and
      // Send card details in a stripe API post request
      const stripeResponse = await stripe.createToken(cardElement, {
        customer: customer,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      //   with stripe ID on hand we send a request to our server
      // and send the token received from Stripe:
      const response = await axios.post("http://localhost:3100/pay", {
        stripeToken,
        productPrice: 300,
      });
      console.log(response.data);
      // if we get correct response from server, then transaction is done:
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Elements stripe={stripePromise}>
      <div>
        {!completed ? (
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Valider</button>
          </form>
        ) : (
          <span>Paiement effectué</span>
        )}
      </div>
    </Elements>
  );
};

export default Payment;
