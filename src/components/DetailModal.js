import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Detail from "./Detail";
import styled from "styled-components";

class DetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section>
        {/* for searchable list, see Searchable.js */}
        {this.props.shown_name && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.openModal()}
          >
            {this.props.shown_name}
          </button>
        )}
        {/* for character table , see Characters.js */}
        {!this.props.shown_name && (
          <button
            type="button"
            className="btn btn-info"
            data-toggle="modal"
            data-target="#exampleModal"
            value="Open"
            onClick={() => this.openModal()}
          >
            More
          </button>
        )}
        <Modal
          visible={this.state.visible}
          width="50%"
          height="100%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <Container>
            <h1>{this.props.character.name}</h1>
            <Detail character={this.props.character} />
            <CloseContainer>
              <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                Close
              </a>
            </CloseContainer>
          </Container>
        </Modal>
      </section>
    );
  }
}

export default DetailModal;

export const Container = styled.div`
  padding: 12px 20px 12px 40px;
  width: 80%;
`;
export const CloseContainer = styled.div`
  padding: 12px 20px 12px 40px;
  width: 80%;
`;
