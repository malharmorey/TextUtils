import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './index.css';

function App() {
  return (
    <>
      <Navbar title='TextUtils' />
      <div className='wholePage pt-3'>
        <div className='container mx-auto'>
          <TextForm heading='Modify your Text' />
        </div>
      </div>
    </>
  );
}

export default App;
