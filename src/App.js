import './Scss/style.scss';
import Leagues from './Pages/Home';
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Leagues />} />
  </Routes>

    </div>

  ) ;
}

export default App;
