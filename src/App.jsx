import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { getInitialData } from "../src/utils";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Modal from "./components/Modal/Modal";
import "./styles/index.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: getInitialData(),
      unFilteredList: getInitialData(),
      viewData: [],
      editData: [],
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUndoArchivedHandler = this.onUndoArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onEditDataHandler = this.onEditDataHandler.bind(this);
    this.onGetDataHandler = this.onGetDataHandler.bind(this);
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
  }

  onUndoArchivedHandler(id) {
    const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
    const ActiveNotes = (NotesArchive[0].archived = false);
    this.setState({ ActiveNotes });
  }

  onSearchHandler(search) {
    const defaultValue = (this.state.lists = this.state.unFilteredList);
    if (search.length !== 0 && search.trim() !== "") {
      this.setState({
        lists: this.state.lists.filter((list) =>
          list.title.toLowerCase().includes(search.toLowerCase())
        ),
      });
    } else {
      this.setState({ lists: defaultValue });
    }
  }

  onEditDataHandler({ id, title, body, createdAt, archived }) {
    createdAt = Date.now();
    const index = this.state.lists.findIndex((book) => book.id === id);
    if (index === -1) {
      // throw an error
      MySwal.fire({
        title: "Error!",
        text: "Please enter a title",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!body) {
      // throw an error
      MySwal.fire({
        title: "Error!",
        text: "Please enter a body",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      MySwal.fire({
        title: "Success!",
        text: "Note has been updated",
        icon: "success",
        confirmButtonText: "Ok",
      });
      /* This is a way to update the state of a component. */
      this.setState((prevState) => {
        const newLists = [...prevState.lists];
        newLists[index] = {
          id,
          title,
          body,
          createdAt,
          archived,
        };
        return { lists: newLists };
      });
    }
    console.log(id, title, body, createdAt, archived);
  }

  onGetDataHandler(notes) {
    this.setState({ viewData: notes });
    this.setState({ editData: notes });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="body-container">
            <MenuContainer onSearch={this.onSearchHandler} />
            <ItemListContainer
              notes={this.state.lists}
              getData={this.onGetDataHandler}
            />
            <ItemContainer
              viewData={this.state.viewData}
              onArchive={this.onArchivedHandler}
              onActive={this.onUndoArchivedHandler}
              onDelete={this.onDeleteHandler}
              editnote={this.onEditDataHandler}
            />
          </div>
        </BrowserRouter>
        <Modal addnote={this.onAddNoteHandler} />
      </div>
    );
  }
}

export default App;
