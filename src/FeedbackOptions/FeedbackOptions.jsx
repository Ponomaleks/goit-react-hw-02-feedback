import Button from '../components/Button';

export default function FeedbackOptions({ options, type, onLeaveFeedback }) {
  return (
    <div>
      {options.map(opt => {
        return <Button text={opt} type={type} key={opt} onClick={onLeaveFeedback} />;
      })}
    </div>
  );
}
