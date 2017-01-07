import React from 'react';

class ItemOptions extends React.Component {
  render() {
    return (
      <span className="options">
        <em>Options: </em>
        <select name="Options" className="tmSelect auto" data-class="tmSelect tmSelect2" data-constraints="">
          {
            this.props.options.map((option) => {
              return <option key={ option }>{ option }</option>
            })
          }
        </select>
      </span>
    )
  }
}

export default ItemOptions;