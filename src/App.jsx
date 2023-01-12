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
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUndoArchivedHandler = this.onUndoArchivedHandler.bind(this);
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

  onDeleteHandler(id) {
    const lists = this.state.lists.filter((list) => list.id !== id);
    this.setState({ lists });
    this.setState({ viewData: [] });
  }

  onArchivedHandler(id) {
    const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
    const ArcivedNotes = (NotesArchive[0].archived = true);
    this.setState({ ArcivedNotes });
    this.setState({
      lists: this.state.unFilteredList.filter(
        (lists) => lists.archived === false
      ),
    });
  }

  onUndoArchivedHandler(id) {
    const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
    const ActiveNotes = (NotesArchive[0].archived = false);
    this.setState({ ActiveNotes });
    this.setState({
      lists: this.state.unFilteredList.filter(
        (lists) => lists.archived === true
      ),
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
          <ItemContainer
            viewData={this.state.viewData}
            onArchive={this.onArchivedHandler}
            onActive={this.onUndoArchivedHandler}
            onDelete={this.onDeleteHandler}
          />
        </div>
        <Modal addnote={this.onAddNoteHandler} />
      </div>
    );
  }
}

export default App;
