# 02 The form\*

---

## /Signup.js

```jsx
return (
  <div>
    <form onSubmit={handleSubmit}>
      //onSubmit the form will send the input of the form using a function
      called "handleSubmit" preceding this code. See to document 03 to view the
      code.
      <input
        onChange={(event) => setUsername(event.target.value)} // "setUsername(event.target.value)" means: take what was input in the form (target.value) when it changes (event) and pass it as the new user name with "setUsername".
        type="text"
        placeholder="username"
        value={username} // this value is created with "setUsername" in code preceding this one.
      />
      <br />
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="email"
        value={email}
      />
      <br />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        value={password}
      />
      <br />
      <span style={{ color: "red" }}>{errorMessage}</span>
      <br />
      <input type="submit" value={"S'inscrire"} />
    </form>
  </div>
);
```

Continues on document 03

More on this can be found at W3Schools, [here](https://www.w3schools.com/react/react_events.asp).

\* NB: this is partial code
