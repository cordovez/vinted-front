# 03 HandleSubmit the form information \*

---

## /Signup.js

```jsx
const handleSubmit = async (event) => {
  //async to assure that all info is sent/received before continuing with other actions.
  try {
    event.preventDefault(); // this is to prevent the input from being cleared on reload
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        username: username,
        email: email,
        password: password, // This is the "body" that will be passed to the API URL indicated above, using axios
      }
    );
    if (response.data.token) {
      // if the response includes a token ...
      setUser(response.data.token); // The user is identified by the token, and
      navigate("/"); //navigate home
    }
  } catch (error) {
    console.log(error.response); // a more explicit response
    console.log(error.message);
    if (error.response.status === 409) {
      setErrorMessage("Cet email a déjà un compte");
    }
  }
};
```

More on this can be found at W3Schools, [here](https://www.w3schools.com/react/react_events.asp).

\* NB: this is partial code
