import './css/App.css';
// import { useState } from 'react';
import QsBox from './components/QsBox';
import InfoBlock from './components/InfoBlock';
import RightBar from './components/rightbar';
function App() {
  return (
    <>
      <div className='App'>
        <div>
          <InfoBlock></InfoBlock>
          <QsBox></QsBox>  
        </div>
        <div>
          <RightBar></RightBar>
        </div>
      </div>
    </>
        );
}
export default App;
