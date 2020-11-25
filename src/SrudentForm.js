import React from 'react';

class StudentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudents(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          value={this.state.name}
          id="name"
          onChange={this.handleChange}
          name="name"
          placeholder="enter teacher"
        />
        <input type="submit" value="add teachers" />
      </form>
    );
  }
}

export default StudentForm;
