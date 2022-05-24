// import React from "react";
// import AxiosTest from "./Components/Axios/AxiosTest";

// function App() {
//     return <AxiosTest />;
// }

// export default App;

//////////////////////////////// HookComponent
// import React from "react";
// import HookTest from "./Components/Hooks/HookTest";

// function App() {
//     return <HookTest />;
// }
// export default App;

////////////////////////////// ContextCompoment
import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/ContextCompoment/Navigation";
import AuthContext from "./context/AuthContext";

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <div className="header">
            <AuthContext.Provider
                value={{
                    isLoggedIn: auth,
                    setLoggedIn: (value) => {
                        setAuth(value);
                    },
                }}
            >
                <Navigation />
            </AuthContext.Provider>
        </div>
    );
}
export default App;
