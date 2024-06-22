import './App.css';
import './output.css'
import './StylingComponents/MainPage.css'
import './StylingComponents/Profile.css'
import Profile from './Components/Profile';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App flex md:flex-row flex-col">
      <section>
        <Profile />
        <MainPage />
      </section>
    </div>
  );
}

export default App;
