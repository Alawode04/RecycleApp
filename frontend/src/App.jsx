import NavigationBar from './component/navbar/NavigationBar';
import {Route, Routes} from 'react-router-dom';
import Home from './component/pages/Home';
import Service from './component/pages/Service';
import './App.css'
import RewardPage from './component/pages/RewardPage';

function App() {


  return (
    <>
        <h1>Welcome to our project</h1>
        <NavigationBar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/reward" element={<RewardPage />}/>
        
      </Routes>
      
     
    </>
  )
}

export default App
