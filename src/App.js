import Main from './pages/Main';
import Reservations from './pages/Reservations';
import Header from './components/Header';
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
		  	<Route path="/main" element={<Main />} />
			  <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
