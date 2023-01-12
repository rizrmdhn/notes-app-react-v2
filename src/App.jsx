import React, { Component } from "react";
import { getInitialData } from "../src/utils";
import Header from "./components/Header/Header";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Modal from "./components/Modal/Modal";
import "./styles/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: getInitialData(),
      unFilteredList: getInitialData(),
      viewData: [],
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchTypeHandler = this.onSearchTypeHandler.bind(this);
    this.onGetDataHandler = this.onGetDataHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      lists: this.state.unFilteredList.filter(
        (lists) => lists.archived === false
      ),
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        lists: [
          ...prevState.lists,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],

        unFilteredList: [
          ...prevState.unFilteredList,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchTypeHandler(NotesOptions) {
    const defaultValue = (this.state.projectList = this.state.unFilteredList);
    if (NotesOptions === "ActiveNotes") {
      this.setState({
        lists: this.state.unFilteredList.filter(
          (lists) => lists.archived === false
        ),
      });
      return defaultValue;
    } else {
      this.setState({
        lists: this.state.unFilteredList.filter(
          (lists) => lists.archived === true
        ),
      });
    }
  }

  onGetDataHandler(notes) {
    this.setState({ viewData: notes });
    console.log(this.state.viewData);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <MenuContainer onSearchType={this.onSearchTypeHandler} />
          <ItemListContainer
            notes={this.state.lists}
            getData={this.onGetDataHandler}
          />
          <ItemContainer viewData={this.state.viewData} />
        </div>
        <Modal addnote={this.onAddNoteHandler} />
      </div>
    );
  }
}

export default App;
