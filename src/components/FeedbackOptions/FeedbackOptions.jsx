const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="list">
      {options.map(option => (
        <li key={option} className="list-item">
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
