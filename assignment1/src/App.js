import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Analytics from "./components/analytics/Analytics";

function App() {
  return (
    <div className="App my-4">
      <Header></Header>
      <Analytics></Analytics>
      <Footer></Footer>
    </div>
  );
}

export default App;
