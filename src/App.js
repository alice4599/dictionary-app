import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <div className="openSource">
            <a
              className="source"
              href="https://github.com/alice4599/dictionary-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Neli
          </div>
        </footer>
      </div>
    </div>
  );
}
