import React, { Component } from "react";

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

  render() {
    const { viewableEls } = this.state;
    console.log(`viewableEls${this.state.viewableEls.length}`);
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={this.state.filterStr}
          onChange={this.handleFilterChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>

          {/* <ul>
            {viewableEls.map(e => (
              <li key={e}>{e.name}</li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Searchable;
