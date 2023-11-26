import confettiImage from '../assets/confetti.png';

type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {


    return (
        <div className="reset-container">
            <img src={confettiImage} alt="" />
            <p>Congratulations on Finishing the trivia, you did a great job !</p>
            <h1>You scored: {((props.correctQuestions / props.totalQuestions) * 100).toFixed(0)}%</h1>
            <div className="btn-container my-2">
                <button type="button" className="btn btn-success" style={{marginRight: '1em'}}>
                Right <span style={{marginLeft: '1em'}} className="badge text-bg-light">{props.correctQuestions}</span>
                </button>
                <button type="button" className="btn btn-danger">
                Wrong <span style={{marginLeft: '1em'}} className="badge text-bg-light">{props.totalQuestions - props.correctQuestions}</span>
                </button>
            </div>
            
            <button className="btn-tryagain" onClick={props.onPress}>Try again!</button>
        </div>
    )
}

export default Reset