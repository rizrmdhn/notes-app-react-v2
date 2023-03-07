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
import autoBind from "auto-bind";
import PropTypes from "prop-types";

const MySwal = withReactContent(Swal);

const toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  background: "#181818",
  color: "#fff",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: getInitialData(),
      unFilteredList: getInitialData(),
      viewData: {},
      editData: [],
    };

    autoBind(this);
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
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],

        unFilteredList: [
          ...prevState.unFilteredList,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const lists = this.state.lists.filter((list) => list.id !== id);
    this.setState({ lists });
    this.setState({ viewData: {} });
  }

  onArchivedHandler(id) {
    const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
    const ArcivedNotes = (NotesArchive[0].archived = true);
    this.setState({ ArcivedNotes });

    this.state.viewData.archived = true;

    toast.fire({
      icon: "success",
      title: "Note has been archived",
    });
  }

  onUndoArchivedHandler(id) {
    const NotesArchive = this.state.lists.filter((lists) => lists.id === id);
    const ActiveNotes = (NotesArchive[0].archived = false);
    this.setState({ ActiveNotes });

    this.state.viewData.archived = false;

    toast.fire({
      icon: "success",
      title: "Note has been unarchived",
    });
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
    const index = this.state.lists.findIndex((note) => note.id === id);
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
      const newViewData = {
        id,
        title,
        body,
        createdAt,
        archived,
      };
      this.setState({ viewData: newViewData });
    }
    console.log(this.state.viewData);
  }

  onGetDataHandler(notes, id) {
    document.getElementById(`card-${id}`).classList.add("item-card-active");

    const ItemCard = document.querySelectorAll(".item-card");
    ItemCard.forEach((item) => {
      if (item.id !== `card-${id}`) {
        item.classList.remove("item-card-active");
      }
    });
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

App.propTypes = {
  lists: PropTypes.array,
  unFilteredList: PropTypes.array,
  viewData: PropTypes.object,
  editData: PropTypes.array,
};

export default App;
