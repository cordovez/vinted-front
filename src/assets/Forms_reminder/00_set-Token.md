# 00 Tokens\*

---

## /App.js

Import two dependencies needed:

```js
import { useState } from "react";
import Cookies from "js-cookie";
```

The variables and functions set here will be passed as params and rendered in target pages. Use "useState" to set the token inside the App() { ...

```jsx
function App() {
const [token, setToken] = useState(null);
```

We define the User based on her token existence (or not)

```jsx
const setUser = (token) => {
    if (token){
        Cookies.set("user-token", token,{expires: 30})
    } else {
        Cookies.remove('user-token")
    } setToken(token)
}
```

Next we need to pass the values as parameters inside the routes ...

```jsx
<Router>
  <Header token={token} setUser={setUser} />
  <Routes>
    <Route path="signup" element={<Signup setUser={setUser} />} /> //this
    "/signup" navigates to <Signup /> passing the state: "setUser"
    <Route path="/login" element={<Login setUser={setUser} />} />
  </Routes>
</Router>
```

\* NB: this is partial code
