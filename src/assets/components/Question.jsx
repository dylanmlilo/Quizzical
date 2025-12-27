export default function Question() {
  return (
    <div className="question-container">
        <h2 className="question-text">What is React?</h2>
        <div className="answers-list">
            <button className="answer-button">A JavaScript library for building user interfaces</button>
            <button className="answer-button">A CSS framework</button>
            <button className="answer-button">A database management system</button>
            <button className="answer-button">A web server</button>
        </div>
    </div>
  );
}