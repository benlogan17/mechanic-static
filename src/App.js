import './App.css';
import { MainPage } from './components/MainPage';
import { SocialIcons } from './components/SocialIcons';
import { BrowserRouter, Route, Routes } from "react-router";
import { ItemPage } from './components/ItemPage';
import { MenuBar } from './components/NavBar/MenuBar';
// import {auth} from '';
// import {useAuthState} from 'react-firebase-hooks/auth';
import { SignIn } from './components/SignIn';

const App = () => {
  // const [user] = useAuthState(auth);
  return (
    <div className="d-flex flex-column container-bg">
      <BrowserRouter>
        <MenuBar />
        <div className='fs-1 text-center mb-3 p-3 title-custom'>
          <h1>Farm Machinery Parts NI</h1>
          <h3 className='bg-red'><span className='claas-font'>CLAAS</span> Forage Specialist</h3>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/home" element={<MainPage />}/>
          <Route path="/items" element={<ItemPage />}/>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>

      <SocialIcons />
    </div>
  );
}

export default App;
