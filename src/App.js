// import logo from "./logo.svg";
import "./App.scss";
import Nav from "./compoments/Nav/Nav";
import MyRoutes from "./compoments/MyRoutes/MyRoutes";

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Nav />
      </div>
      <div className="app-right">
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
