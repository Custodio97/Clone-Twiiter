import './App.css'
import Sidebar from "./components/Sidebar";
import Twiiter from './components/Twiiter';

function App() {
  return (
    <div className="twitter">
      <Sidebar/>
      <Twiiter/>
    </div>
  );
}

export default App;
