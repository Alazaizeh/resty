import React, { useEffect, useState } from "react";
import axios from "axios";

function Results(props) {
  return (
    <section>
      <pre>
        {props.data ? JSON.stringify(props.data, undefined, 4) : "loading...!"}
      </pre>
    </section>
  );
}

export default Results;
