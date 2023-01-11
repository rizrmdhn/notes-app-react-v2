import React, { Component } from "react";
import Header from "./components/Header/Header";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Modal from "./components/Modal/Modal";
import "./styles/index.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <MenuContainer />
          <ItemListContainer />
          <ItemContainer />
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
