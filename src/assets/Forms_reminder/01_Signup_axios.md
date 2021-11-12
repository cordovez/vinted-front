# 01 Signup with axios (post method)\*

---

## /Signup.js

Three dependencies are needed ...

```jsx
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
```

Then setting the states is needed to be able to label and pass the information gathered in the form via axios :

```jsx
const Signup = ({setUser}) => { //'setUser is passed from home page
    const[username, setUserName] = useState("")// A blank string as default
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
```

Additionally, to have an explicit error message if needed:

```jsx
const [errorMessage, setErrorMessage] = useState("");
```

and we need to set the "useNavigate" explicitly:

```jsx
const navigate = useNavigate();
```

\* NB: this is partial code

### continues on document 02 ..
