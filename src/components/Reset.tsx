type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div className="reset-container">
            <p>Congratulations on Finishing the trivia, you did a great job !</p>
            <h1>You scored: {(props.correctQuestions / props.totalQuestions)*100}%</h1>
            <button onClick={props.onPress}>Try again!</button>
        </div>
    )
}

export default Reset