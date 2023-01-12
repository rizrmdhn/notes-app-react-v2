import React, { Component } from "react";
import "./styles/style.css";

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
    event.preventDefault();
    this.props.addnote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
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
                  required
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                />
              </div>
              <div className="note-input">
                <input
                  type="text"
                  className="form-control"
                  id="note-input"
                  placeholder="Tuliskan Catatanmu di sini ..."
                  required
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
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
                data-bs-dismiss="modal"
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
