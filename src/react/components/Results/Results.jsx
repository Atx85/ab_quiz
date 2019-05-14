import React from "react";
import Result from "./Result";

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };

    this.addResult = this.addResult.bind(this);
  }

  addResult(e) {
    e.preventDefault();
    let arr = this.state.results.slice();
    arr.push(<Result key={this.state.results.length} />);
    this.setState({ results: arr });
  }

  render() {
    return (
      <div className="results-container">
        <h2>Possible Results</h2>
        {this.state.results}
        <button onClick={this.addResult} className="button-primary">
          Add Quiz Result
        </button>
      </div>
    );
  }
}

export default Results;
