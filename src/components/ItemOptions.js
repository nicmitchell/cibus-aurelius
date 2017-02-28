import React from 'react';

export default class ItemOptions extends React.Component {
  render() {
    return (
      <span className="options">
        <em>Options: </em>
        <select name="Options">
          {
            this.props.options.map((option) => {
              return <option key={ option }>{ option }</option>
            })
          }
        </select>
      </span>
    )
  }

  static propTypes = {
    options: React.PropTypes.array.isRequired
  }
}
