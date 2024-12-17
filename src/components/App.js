import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense  } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import './App.css';

const Welcome = lazy(() => import('../pages/Welcome/welcome'));
const SignUp = lazy(() => import('../pages/SingUp/SingUp'));
const SignIn = lazy(() => import('../pages/SingIn/SingIn'));
const User = lazy(() => import('../pages/UserPage/user'));

// import WelcomePage from '../pages/Welcome/welcome';

function App() {
  return (
    <>
    <GlobalStyle />
    <Suspense fallback={<div>Завантаження...</div>}>
      {/* Обгортка з Router для забезпечення контексту маршрутизації */}
      <Router>
        <Routes>
          <Route path="/pulse_of_life" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Router>
    </Suspense>
    </>
  );
}

export default App;
