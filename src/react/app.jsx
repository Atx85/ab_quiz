import React from "react";
import ReactDom from "react-dom";
import Question from "./components/Question/Question";
import Results from "./components/Results/Results";
import uuid from 'uuid/v1';

export default class Quiz extends React.Component {
  constructor() {
    super();

    this.state = {
      questionCategories: [],
      questions: []
    };

    this.addQuestionCategory = this.addQuestionCategory.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.saveQuiz = this.saveQuiz.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    
  }
  
  removeQuestion( id ) {
    let index =  this.state.questions.indexOf(this.state.questions.find((el) => {
      return el.id === id 
    }));
    let arr = this.state.questions;
    arr.splice(index, 1 );
    this.setState({questions: arr});
  }

  addQuestionCategory(el) {
    let arr = this.state.questionCategories.slice();
    arr.push(el);
    this.setState({ questionCategories: arr });
  }

  saveQuiz() {
      console.log(this.state);
  }

  addQuestion(e) {
    e.preventDefault();
    let arr = this.state.questions.slice();
    let qID = uuid();
    arr.push(
      { question: 
      <Question
        key={Math.floor(Math.random() * 1000)}
        questionCats={this.state.questionCategories}
        addQuestionCat={this.addQuestionCategory}
        remove = {this.removeQuestion}
        questionId = {qID}
      />,
      id: qID }
      );
    this.setState({ questions: arr });
  }

  render() {
    return (
      <div className="ab-quiz-container">
        <div className="postbox">
          <div className="inside">
            <h1>Quiz Creator</h1>
            <p className="description">
              You may want to create some questions and give them scores and at
              least a correct answer. After you have created a few questions,
              you may want to set declare some results based on the logic that
              you planned on a paper. If you want to create a more complicated
              explanation, use the question category option which allows you to
              evaluate the score of a group of a questions inside your quiz.
            </p>
          </div>
        </div>
        <Question
          questionCats={this.state.questionCategories}
          addQuestionCat={this.addQuestionCategory}
        />
        {this.state.questions.map((x) => x.question) }
        <button
          className="button-primary"
          onClick={this.addQuestion}
          id="addQuizQuestion"
          >
          Add Quiz Question
        </button>

        <Results />

        <button className="save-quiz" onClick={ this.saveQuiz }>Save Quiz</button>
      </div>
    );
  }
}

const app = document.getElementById("ab_quiz_admin_app");
ReactDom.render(<Quiz />, app);
