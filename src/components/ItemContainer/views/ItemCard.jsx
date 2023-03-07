import React, { Component } from "react";
import ItemBody from "./ItemBody";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";

const MySwal = withReactContent(Swal);

class ItemCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      createdAt: this.props.createdAt,
      archived: this.props.archived,
    };

    this.onEditDatas = this.onEditDatas.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          createdAt: this.props.createdAt,
          archived: this.props.archived,
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate() {
    if (this.state.body !== this.props.body) {
      const editButton = document.querySelector(".edit-btn");
      editButton.classList.remove("hide-button");
      editButton.removeAttribute("disabled");
    } else {
      const editButton = document.querySelector(".edit-btn");
      editButton.classList.add("hide-button");
      editButton.setAttribute("disabled", "disabled");
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onEditDatas(event) {
    // check if the body value is the same as the props body value
    if (this.state.body === this.props.body) {
      return MySwal.fire({
        title: "No Changes",
        text: "You didn't make any changes",
        icon: "info",
      });
    } else {
      event.preventDefault();
      this.props.editnote(this.state);
    }
  }

  render() {
    return (
      <div className="item-card-container">
        <div className="item-data-card">
          <ItemBody
            id={this.state.id}
            archived={this.state.archived}
            title={this.state.title}
            createdAt={this.state.createdAt}
            body={this.state.body}
            onArchive={this.props.onArchive}
            onActive={this.props.onActive}
            onDelete={this.props.onDelete}
            onEdit={this.onBodyChangeEventHandler}
            onSaveDatas={this.onEditDatas}
          />
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  editnote: PropTypes.func.isRequired,
};

export default ItemCard;
