import { Question } from "../types"
import Answers from "./Answers";
import '../App.css'

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void
}

function QuestionComp(props: Props) {
    return (
        <div className="questions-container">
            <h3>{props.question.question}</h3>
            <div>
            <Answers question={props.question} onSubmit={props.onSubmit} />
            </div>
        </div>
    )
}

export default QuestionComp