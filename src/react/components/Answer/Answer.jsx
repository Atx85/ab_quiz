import React from 'react'

function Answer(props) {
    return(
        <div className="single-answer">
            <input type="text" name={"question_answer_"+props.questionId+"[]"} id={"answer_"+props.questionId} />
            <label htmlFor={"correct_answer_"+props.questionId}>
                <p style={{display:'inline-block', marginLeft:'15px', marginRight: '5px'}}>Correct Answer!</p>
                <input type="radio" name={"correct_answer_"+props.questionId} value="correct" />
            </label>
        </div>
    );
}

export default Answer;