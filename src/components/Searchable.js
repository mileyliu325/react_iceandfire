import React, { Component } from "react";
import styled from "styled-components";

class Searchable extends Component {
  constructor(props) {
    super();
    this.state = {
      filteredElements: [],
      viewableEls: props.elements
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
    return elements.filter(el => JSON.stringify(el).includes(filterStr));
  }
  handleFilterChange = e => {
    const { elements } = this.props;

    this.setState({
      filterStr: e.target.value,
      viewableEls: this.getViewableEls(elements, e.target.value)
    });
  };
  toDetail = e => {};

  render() {
    const { viewableEls } = this.state;
    console.log(`viewableEls${this.state.viewableEls.length}`);
    return (
      <Container className="input-group mb-3">
        <InputContainer>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={this.state.filterStr}
            onChange={this.handleFilterChange}
          />
        </InputContainer>

        {this.state.filterStr && (
          <ListContainer>
            <ul className="list-group mb-4">
              {viewableEls.map(e => (
                <li key={e} className="list-group-item">
                  <a onClick={this.toDetail} href="#">
                    {e.name}
                  </a>
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
