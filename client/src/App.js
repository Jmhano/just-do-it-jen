import React from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
// import TabPanel from "./components/TabPanel";

import Logout from "./components/Logout";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Footer from "./components/Footer";
import WorkoutForm from "./components/WorkoutForm";

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

          {/* <TabPanel/> */}

          <h2>Welcome to your trainer profile</h2>
          <button onClick={Logout}>Logout</button>

          <WorkoutForm/>
        </div>
      ) : (
        <><LoginForm Login={LoginForm} />
       
        
        <SignupForm Signup={SignupForm} />
        </>

      )}
      

      </div>
      <div className="flex-column justify-flex-start min-100-vh">
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
