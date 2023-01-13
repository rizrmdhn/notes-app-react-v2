import React, { Component } from "react";
import ItemBody from "./ItemBody";

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

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onEditDatas(event) {
    event.preventDefault();
    this.props.editnote(this.state);
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

export default ItemCard;
