import { Routes, Route, Navigate } from 'react-router-dom'
import LoginReg from './views/LoginReg';
import MainPage from './views/MainPage';

function App() {
  return (
    <div className='container mt-4'>

      <Routes>
        <Route path={'*'} element={< Navigate to={'/'} />} />
        <Route path={'/'} element={< MainPage />} />
        <Route path={'/loginreg'} element={< LoginReg />} />
      </Routes>
    </div>
  );
}

export default App;
