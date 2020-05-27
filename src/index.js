import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import { App } from "./App";
import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-mikpc3u6g.now.sh/graphql",
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
