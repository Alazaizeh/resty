import React, { useEffect, useState } from "react";
import axios from "axios";

function Results(props) {
  const [result, setResult] = useState("loading...!");

  useEffect(() => {
    let response;
    // Update the document title using the browser API
    if (props.data) {
      switch (props.data.method) {
        case "PUT":
          axios
            .put(props.data.url)
            .send(props.data.body)
            .then((res) => {
              setResult(
                res ? JSON.stringify(res, undefined, 4) : "loading...!"
              );
            });
          break;
        case "POST":
          axios
            .post(props.data.url)
            .send(props.data.body)
            .then((res) => {
              setResult(
                res ? JSON.stringify(res, undefined, 4) : "loading...!"
              );
            });
          break;
        case "DELETE":
          axios.delete(props.data.url).then((res) => {
            setResult(res ? JSON.stringify(res, undefined, 4) : "loading...!");
          });
          break;
        default:
          axios.get(props.data.url).then((res) => {
            setResult(res ? JSON.stringify(res, undefined, 4) : "loading...!");
          });
          break;
      }
    }
  });
  return (
    <section>
      <pre>{result}</pre>
    </section>
  );
}

export default Results;
