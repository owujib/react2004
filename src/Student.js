import React from 'react';

class Student extends React.Component {
  render() {
    const { students } = this.props;

    const studentsList = students.map((element) => {
      return (
        <li key={element.id} style={listStyle}>
          {element.name}
          <div>x</div>
        </li>
      );
    });
    return (
      <div className="students">
        <h1>Hello Students</h1>
        <ul style={{ display: 'flex' }}>{studentsList}</ul>
      </div>
    );
  }
}

export default Student;

const listStyle = {
  margin: '10px',
  padding: '10px',
  backgroundColor: '#fff',
  listStyleType: 'none',
  boxShadow: '0px 2px 10px #000',
  borderRadius: '10px',
  display: 'flex',
  cursor: 'pointer',
};

const xstyle = {
  margin: '10px',
};
