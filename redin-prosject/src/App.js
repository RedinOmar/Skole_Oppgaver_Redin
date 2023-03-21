import './App.css';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Er du...</h1>

        <div className='confirm-box'>
          <div className='confirm-user'>
            <h2>En Bruker</h2>
            <button onClick={() => alert('cliked')}>Login</button>
            <button onClick={() => alert('cliked')}>Sign In</button>
          </div>

          <h2>Eller</h2>

          <div className='confirm-employe'>
            <h2>En Ansatt</h2>
            <button onClick={() => alert('cliked')}>Login</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
