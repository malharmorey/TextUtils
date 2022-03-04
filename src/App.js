import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' />
      <div className='container my-3'>
        <TextForm heading='Modify your Text' />
      </div>
    </>
  );
}

export default App;
