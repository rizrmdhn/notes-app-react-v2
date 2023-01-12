import React, { Component } from "react";
import "./styles/style.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    // checking the state of the form
    if (this.state.title === "" || this.state.body === "") {
      // if the form is empty, then show the alert
      MySwal.fire({
        title: "Oops...",
        text: "Please fill the form!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      // if the form is not empty, then add the note
      event.preventDefault();
      this.props.addnote(this.state);
      // then clearing the form
      this.setState(() => {
        return {
          title: "",
          body: "",
        };
      });
    }

    // removing the modal and the backdrop
    const backdrop = document.getElementsByClassName("modal-backdrop");
    const modal = document.getElementById("addNoteModal");
    modal.classList.remove("show");
    backdrop[0].classList.remove("show");
  }

  render() {
    return (
      <div
        className="modal fade"
        id="addNoteModal"
        tabIndex="-1"
        aria-labelledby="addNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addNoteModalLabel">
                Buat Catatan
              </h1>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="title-input">
                <label htmlFor="title-input" className="form-label">
                  Sisa Karakter: {this.state.limit - this.state.title.length}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title-input"
                  placeholder="Ini adalah judul ..."
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                  required
                />
              </div>
              <div className="note-input">
                <input
                  type="text"
                  className="form-control"
                  id="note-input"
                  placeholder="Tuliskan Catatanmu di sini ..."
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="close-modal-btn"
                className="btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                id="submit-note-btn"
                className="add-note btn"
                // data-bs-dismiss="modal"
                onClick={this.onSubmitChangeEventHandler}
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
