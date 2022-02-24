// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name="Prasad";
function App() {
  return (
    <>

{/* <Navbar title="TextUtils" aboutText="AboutTextUtlis"/> */}
{/* <Navbar/> */}
<Navbar title="TextUtils" />
<div className="container my-3" >
<TextForm  heading="enter the text for analyze below"  />
{/* <About/> */}
</div>


    </>
  );
}

export default App; 
