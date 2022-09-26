import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/index.js';

function App() {
  return (
    <div className='grid grid-cols-5'>
      <Nav />
      <main className='col-span-4 bg-cyan-50'>
        
      </main>
    </div>
  );
}

export default App;
