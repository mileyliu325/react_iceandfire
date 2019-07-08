import React, { Component } from "react";
import styled from "styled-components";
import DetailModal from "./DetailModal";
import PropTypes from 'prop-types';
class Searchable extends Component {
  constructor(props) {
    super();
    this.state = {
      viewableEls: props.elements,
      filterStr: ''

    };
  }
  componentWillReceiveProps(nextProps) {
    const { elements } = this.props;
    const { filterStr } = this.state;

    if (elements !== nextProps.elements) {
      this.setState({
        viewableEls: this.getViewableEls(nextProps.elements, filterStr)
      });
    }
  }

  getViewableEls(elements, filterStr) {
    //todo: ignore case sensative
    return elements.filter(el => JSON.stringify(Object.values(el)).includes(filterStr));
  }
  handleFilterChange = e => {
    const { elements } = this.props;

    this.setState({
      filterStr: e.target.value,
      viewableEls: this.getViewableEls(elements, e.target.value)
    });
  };

  render() {
    const { viewableEls, filterStr } = this.state;
    return (
      <Container className="input-group mb-3">
        <InputContainer>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            // aria-label="Search"
            // aria-describedby="button-addon2"
            value={filterStr}
            onChange={this.handleFilterChange}
          />
        </InputContainer>

        {filterStr && (
          <ListContainer>
            <ul className="list-group mb-4">
              {viewableEls.map(e => (
                <li key={e.url} className="list-group-item">
                  <DetailModal
                    character={e}
                    shown_name={`${e.name} ( ${e.gender} )`}
                  />
                </li>
              ))}
            </ul>
          </ListContainer>
        )}
      </Container>
    );
  }
}

export default Searchable;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 80%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
`;
export const ListContainer = styled.div`
  padding: 12px 20px 12px 40px;
  width: 80%;
`;

Searchable.protoTypes = {
  elements: PropTypes.array
}