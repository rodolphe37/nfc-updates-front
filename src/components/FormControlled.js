import React from 'react';
import './FormControlled.css';
import { crudDelete } from 'ra-core';

class FormControlled extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({ showDialog: false });
      const { dispatchCrudDelete, startUndoable, resource, record, basePath, redirect, undoable } = this.props;
      if (undoable) {
        startUndoable(crudDelete(resource, record.id, record, basePath, redirect));
      } else {
        dispatchCrudDelete(resource, record.id, record, basePath, redirect);
      }
    }
  
    render() {
      return (
        <div className="Form--replace_style">
            <form onSubmit={this.handleSubmit}>
            <label>
                <input className="Form-input_text" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="Form-input_Submit" type="submit" value="Suprimer" />
            </form>
        </div>
      );
    }
  }

  export default FormControlled;