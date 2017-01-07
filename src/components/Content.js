import React from 'react';
import MenuItem from './MenuItem';

class Content extends React.Component {
  render() {
    return(
      <section className="content gallery pad1">
        <div className="container">
          <div className="row">
          { 
            this.props.data.map((item, idx) => {
              return <MenuItem { ...item } key={ idx }/>
            })
          }
          </div>
        </div>
      </section>      
    )
  }
}

export default Content;