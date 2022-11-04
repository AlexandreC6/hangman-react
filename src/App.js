import './App.css';
import Header from './components/Header.jsx';
import Figure from './components/Figure.jsx';
import WrongLetters from './components/WrongLetters.jsx';
import Word from './components/Word.jsx';

function App() {
  return (<>
    <Header />
    <div className='game-container'>
      <Figure />
      <WrongLetters />
      <Word />
    </div>
  </>
  );
}

export default App;
