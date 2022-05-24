import React from "react";

React.createContext({
    Field1: "value1",
    Field2: "value2",
    Field3: "value3",
    Field4: "value4",
    Field5: "value5",
});

const AuthContext = React.createContext({
    isLoggedIn: false,
    setLoggedIn: () => {},
});

export default AuthContext;
