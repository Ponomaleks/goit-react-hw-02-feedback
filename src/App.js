import './App.css';
import Title from './components/Title';
import Button from './components/Button';

function App() {
  return (
    <>
      <Title titleText="Pease leave feedback" />
      <Button text="Good" type="button" />
      <Button text="Neutral" type="button" />
      <Button text="Bad" type="button" />
    </>
  );
}

export default App;
