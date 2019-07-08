import React, { Component } from "react";
import Modal from "react-awesome-modal";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Detail from "./Detail";
class DetailModal extends Component {
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
    const { shown_name, character } = this.props;
    return (
      <section>
        {/* for searchable list, see Searchable.js */}
        {shown_name && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.openModal()}
          > {shown_name}
          </button>
        )}
        {/* for character table , see Characters.js */}
        {!shown_name && (
          <button
            type="button"
            className="btn btn-info"
            onClick={() => this.openModal()}
          > More
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
            <h1>{character.name}</h1>
            <Detail character={character} />
            <CloseContainer>
              <button className="btn btn-info" onClick={() => this.closeModal()}>
                Close
              </button>
            </CloseContainer>
          </Container>
        </Modal>
      </section>
    );
  }
}

DetailModal.protoTypes = {
  shown_name: PropTypes.string,
  character: PropTypes.object
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
