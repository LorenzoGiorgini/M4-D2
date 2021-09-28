import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import MyFooter from './Components/MyFooter';
import MyJumbo from './Components/MyJumbo';
import LatestRelease from './Components/LatestRelease';

function App() {
  return (
    <div>
      <MyNavbar/>
      <MyJumbo/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;