import './App.css';
import { Greeting } from './Greeting/Greeting';
import { Message } from './Message/Message';
import { Button } from './Button/Button';

function App() {
  return (
    <div className="App">
      <Greeting name='Vika' />
      <Message text='Зараз весна, і на вулиці стає тепліше. Люди все частіше виходять на прогулянки. 😊'/>
      <Button onClick={() => console.log('Кнопка натиснулась')}/>
    </div>
  );
}

export default App;
