import './App.css';
import Navbar from './Components/Navbar';

function App() {
  // This App will be kind of  our app's overview file.
  return (
    <>
      {/* here we pass props via HTMl attributes */}
      {/* <Navbar title='TextUtils' aboutText='About-TextUtils' /> */}
      {/* <Navbar /> */}
      <Navbar title='TextUtils' />
    </>
  );
}

export default App;
