import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense  } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import './App.css';

const Welcome = lazy(() => import('../pages/Welcome/welcome'));
const SignUp = lazy(() => import('../pages/SingUp/SingUp'));

// import WelcomePage from '../pages/Welcome/welcome';

function App() {
  return (
    <>
    <GlobalStyle />
    <Suspense fallback={<div>Завантаження...</div>}>
      {/* Обгортка з Router для забезпечення контексту маршрутизації */}
      <Router>
        <Routes>
          <Route path="pulse_of_life/" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </Suspense>
    </>
  );
}

export default App;
