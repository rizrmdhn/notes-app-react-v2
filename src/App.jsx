import ItemContainer from "./components/ItemContainer/ItemContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <MenuContainer />
        <ItemListContainer />
        <ItemContainer />
      </div>
    </div>
  );
}

export default App;
