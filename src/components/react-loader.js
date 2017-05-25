import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <i className={classNames('react-loader',this.props.className)}></i>
    );
  }
}
