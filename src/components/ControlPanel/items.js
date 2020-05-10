import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

class Item extends React.Component {
  static propTypes = {
    liClass: PropTypes.string,
    spanClass: PropTypes.string,
    buttonClass: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.func,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    liClass: null,
    spanClass: null,
    buttonClass: null,
    icon: null
  }

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
      <li className={this.props.liClass}>
        <a>
          <button title={this.props.name} id={this.props.id} className={this.props.buttonClass}
                  onClick={event => this.props.onClick(event, this.props.data)}><this.props.icon/>
          </button>
          <span className={this.props.spanClass}>{this.props.name}</span>
        </a>
      </li>
    </Fragment>
    );
  }
}

export default Item;