import React, { useEffect, useState } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    try {
      let res = await axios({
        method: requestParams.method.toLowerCase(),
        url: requestParams.url,
        headers: {},
        data: requestParams.body,
      });
      setData(res);
      setRequestParams(requestParams);
    } catch (err) {
      setData(err);
      setRequestParams(requestParams);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
