import React from 'react';
import ItemOptions from './ItemOptions';

class MenuItem extends React.Component {
  render() {
    return(
      <div className="grid_4">
        <div className="gall_block">
          <img src="images/page2_img1.jpg" alt="" />
            <div className="gall_bot">
              <div className="text1">
                <a href="#">{ this.props.name }</a>
              </div>
              { this.props.desc }
              <p>{ this.props.time }</p>
              { 
                (this.props.options) ? <ItemOptions options={ this.props.options }/> : ''
              }
            </div>
          </div>
      </div>
    );
  }
}

export default MenuItem;