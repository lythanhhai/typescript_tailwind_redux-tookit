import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav/index.js";
import ListMovie from "./component/list/index.js";

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="md:col-span-4 bg-cyan-50">
        <div className="flex flex-row w-full justify-center md:justify-end py-5 px-5">
          <button className="uppercase mr-4 border-primary border-2 py-1 px-2 hover:text-white hover:bg-primary">
            login
          </button>
          <button className="uppercase border-primary border-2 py-1 px-2 hover:text-white hover:bg-primary">
            register
          </button>
        </div>
        <ListMovie />
      </main>
    </div>
  );
}

export default App;
