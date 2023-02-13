import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BlogList />
    </div>
  );
}

export default App;
