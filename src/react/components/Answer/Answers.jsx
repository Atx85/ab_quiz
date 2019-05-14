import React from 'react';
import Answer from './Answer';

class Answers extends React.Component {

    constructor(props) {
        super();
        this.state = {
            answers: [],
            questionId: props.questionId
        }
    
        this.addAnswer = this.addAnswer.bind(this);
    }
    
    addAnswer(e) {
        e.preventDefault();
        let arr = this.state.answers.slice();
        arr.push( <Answer key={ Math.random()} questionId={this.state.questionId}  /> );
        this.setState({answers: arr});
    }
    
    render() {
        return(
            <div className="answers-container">
                <h3>Answers</h3>
                {this.state.answers}
    
                <button style={{marginBottom:'25px'}} onClick={this.addAnswer} className="button-secondary">Add Answer</button>
            </div>
        );
    }
}

export default Answers;
    