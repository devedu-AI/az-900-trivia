import { useState } from 'react';
import './App.css'
import questions from './questions.json';
import { Questions } from './types';
import StatBar from './components/StatBar';
import QuestionComp from './components/Question';
import Reset from './components/Reset';

function App() {

  const allQuestions = questions as Questions

  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
  const [ correctAnswers, setCorrectAnswers ] = useState(0);
  const [ incorrectAnswers, setIncorrectAnswers ] = useState(0);

  const [ waitingToAdvance, setWaitingToAdvance ] = useState(false);

  const onSubmit = (correct: boolean) => {
    if(correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const reset = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setWaitingToAdvance(false);
  }

  if(currentQuestionIndex >= allQuestions.questions.length) {
    return (
      <Reset
        totalQuestions={allQuestions.questions.length}
        correctQuestions={correctAnswers}
        onPress={reset}
      />
    )
  }

  return (
    <>
      <div className='App container'>
        <h1>AZ 900 Trivia</h1>
        <p style={{fontFamily: 'Inter Tight',fontWeight: '500', fontSize: '14px', borderBottom: '1px solid #666666', padding: '0 1em 1em 1em'}}>A Comprehensive exam cram for the AZ 900 certification exam. Dive into a curated collection of exam-focused questions designed to enhance your understanding of Microsoft Azure fundamentals.</p>
        <StatBar
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={allQuestions.questions.length}
          correct={correctAnswers}
          incorrect={incorrectAnswers}
        />
        <QuestionComp 
          question={allQuestions.questions[currentQuestionIndex]} 
          onSubmit={onSubmit} />
        { waitingToAdvance && <button className='btn-next' onClick={advance}>Next<i className="fa-solid fa-arrow-right"></i></button>}  
      </div>
        <footer>
          Made with 💗 by <a href='https://github.com/tauhidpatel' target='_blank'>Tauhid</a>
        </footer>
    </>
  )
}

export default App