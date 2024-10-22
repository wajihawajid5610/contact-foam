
import './App.css';
import ContactFoam from './components/ContactFoam/ContactFoam';
import ContactHeader from './components/ContactHeader/ContactHeader';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div >
      <NavBar/>
      <main className="main_container">
        <ContactHeader/>
        <ContactFoam/>
      </main>
     
    </div>
  );
}

export default App;
