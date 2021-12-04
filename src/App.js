import './App.css';
import Header from './components/Header';

function App() {

  const messageVariable = 'big ass bootie';

  return (
    <div className="App">
      <Header />
      <h1>Hello from React</h1>
      <h1>Hello from {messageVariable}</h1>
    </div>
  );
}

export default App;
