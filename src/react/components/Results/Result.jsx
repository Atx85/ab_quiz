import React from "react";

function Result(props) {
  return (
    <div className="postbox possible-result">
      <div className="inside">
        <label htmlFor="">
          <h4 style={{ display: "inline-block" }}>From</h4>
          <input
            type="number"
            style={{ width: "50px", marginRight: "20px" }}
            name=""
            id=""
          />
        </label>
        <label htmlFor="">
          <h4 style={{ display: "inline-block" }}>To</h4>
          <input type="number" style={{ width: "50px" }} name="" id="" />
        </label>

        <label htmlFor="">
          <h3>Explanation</h3>
          <textarea
            style={{ width: "100%" }}
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </label>
      </div>
    </div>
  );
}

export default Result;
