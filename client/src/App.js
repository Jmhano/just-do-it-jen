import React from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import Logout from "./components/Logout";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
      {localStorage.auth_token && localStorage.auth_token !== null ? (
        <div className="welcome">
          <h2>Welcome to our trainer app!</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <><LoginForm Login={LoginForm} />
       
        
        <SignupForm Signup={SignupForm} />
        </>

      )}
      

      </div>
    </ApolloProvider>
  );
}

export default App;
