import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Xin chào mọi người👋</h1>
        <p>Tôi là <strong>Võ Quang Nhật</strong></p>
        <p>Sinh viên năm 4, trường đại học Sư Phạm Kỹ Thuật</p>
        <p>Sở thích: nghe nhạc, code và chơi game</p>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
