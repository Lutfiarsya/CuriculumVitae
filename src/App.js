import './App.css';
import './StylingComponents/MainPage.css'
import './StylingComponents/Profile.css'
import Profile from './Components/Profile';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <section>
        <Profile />
      </section>
      <section>
        <MainPage />
      </section>
    </div>
  );
}

export default App;
