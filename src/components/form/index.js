import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setmethod] = useState("GET");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
      body: show ? e.target.textArea.value : "",
    };

    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label
          className="methods"
          onClick={(e) => {
            if (e.target.tagName == "SPAN") {
              setmethod(e.target.innerText);
              for (const span of document.querySelectorAll("span.active")) {
                span.classList.remove("active");
              }
              if (["PUT", "POST"].indexOf(e.target.innerText) >= 0) {
                setShow(true);
              } else {
                setShow(false);
              }

              e.target.className = "active";
            }
          }}
        >
          <span className="active" id="get">
            GET
          </span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
        {show ? (
          <textarea
            name="textArea"
            defaultValue=""
            show={show}
            rows="4"
            cols="50"
          ></textarea>
        ) : null}
      </form>
    </>
  );
}

export default Form;
