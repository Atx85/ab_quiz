import React from 'react';
import uuid from 'uuid/v1';
import Answers from '../Answer/Answers'

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question : '',
            score: 0,
            newQuestionCatItem: '',
            questionCatValue: '',
            questionId: (this.props)?this.props.questionId:'did-not-get-id'
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addQuestionCat = this.addQuestionCat.bind(this);
        this.quizQuestionCategories = this.quizQuestionCategories.bind(this);
        this.selectQuestionCat = this.selectQuestionCat.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        
    }

    addQuestionCat(e) {
        e.preventDefault();
        this.setState({newQuestionCatItem: ''});
        this.setState({questionCatValue: ''});
        this.props.addQuestionCat( this.state.newQuestionCatItem );
    }

    quizQuestionCategories() {
        if( this.props.questionCats )
            return this.props.questionCats.map( (x,i) => <li onClick={this.selectQuestionCat} key={i}>{x}</li>  );
    }

    selectQuestionCat( e ) {
        this.setState({questionCatValue: e.target.innerHTML});
    }

    removeQuestion(e) {
        e.preventDefault();
        this.props.remove(this.state.questionId);
    }

    handleOnChange( e ) {
        switch (e.target.name) {
            case 'ab_quiz_question': {
                this.setState({question:e.target.value});
                break;
            }
            
            case 'ab_quiz_question_cat' : {
                this.setState({newQuestionCatItem: e.target.value});
                this.setState({questionCatValue: e.target.value});
                break;
            }

            case 'ab_quiz_question_point' : {
                this.setState({score: e.target.value  });
            }
                        
            default:
                break;
        }
    }

    render() {
        return(
            <div className="question postbox">
                <div className="inside">
                    <label htmlFor="ab_quiz_question">
                        <h3>Question: {this.state.question} 
                            <span>[Score: {this.state.score}]</span>
                            <button onClick={this.removeQuestion} style={{float:'right'}} className="button-secondary">Remove</button>
                        </h3>
                        <input type="text" onChange={this.handleOnChange} name="ab_quiz_question" id="ab_quiz_question" value={this.state.question} />
                    </label>
                    <Answers questionId={this.state.questionId} />

                    <label htmlFor="ab_quiz_question_point">
                        <h3>Points:</h3>
                        <input type="number" value={this.state.score} onChange={this.handleOnChange} name="ab_quiz_question_point" id="ab_quiz_question_point"/>
                    </label>


                    <label htmlFor="ab_quiz_question_cat">
                        <h3>Category:</h3>
                        <p className="description">If you want to break down the results into smaller parts, please add a category name to be able to refer at them when explaining the results.</p>
                        <input type="text" onChange={this.handleOnChange} value={this.state.questionCatValue}  name="ab_quiz_question_cat" id="ab_quiz_question_cat"/>
                    </label>
                    <button id="add_quiz_question_cat" onClick={this.addQuestionCat} className="button-secondary" >Add Question Category</button>
                    
                    <div className="question-category" style={{display:(this.props.questionCats.length)?'block':'none'}}>
                        <h3>Available categories: </h3>
                        <p className="description">If this question belongs to a category, than select a category item from below. </p>
                        <ul id="quiz_question_cats">
                            { this.quizQuestionCategories() }
                        </ul>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Question;