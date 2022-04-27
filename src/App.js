import './styles/App.css'
import { FishFacts } from './components/FishFacts';

const App = () => {



  return (
    <div className="App">
      <header className="fish-header"></header>
      <main>
        <div className="fishpic-container">
          <h1>GoFish</h1>
          <FishFacts />
        </div>
          <div className='button-container'>
        </div>
      </main>
    </div>
  )
}

export default App;
