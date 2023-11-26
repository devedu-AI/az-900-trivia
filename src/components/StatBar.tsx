import '../App.css'

type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}

function StatBar(props: Props) {
    return (
        <div className="stat-container">
            <div className="stat-score">
                <p style={{fontWeight: '600', fontSize: '14px'}}>Questions: {props.currentQuestion} of {props.totalQuestions}</p>
            </div>
            <div className="stat-score-two">
                <button type="button" className="btn btn-success" style={{marginRight: '1em'}}>
                Right <span style={{marginLeft: '1em'}} className="badge text-bg-light">{props.correct}</span>
                </button>
                <button type="button" className="btn btn-danger">
                Wrong <span style={{marginLeft: '1em'}} className="badge text-bg-light">{props.incorrect}</span>
                </button>
            </div>
        
        </div>
    );
}

export default StatBar