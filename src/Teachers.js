import React from 'react';
import './App.css';

class Teachers extends React.Component {
  render() {
    const { teachers } = this.props;

    const teacherList = teachers.map((element) => {
      return (
        <li key={element.id} style={listStyle}>
          {element.name}
        </li>
      );
    });
    return (
      <div className="teachers">
        <h1>Hello Teachers</h1>
        <ul style={{ display: 'flex' }}>{teacherList}</ul>
      </div>
    );
  }
}

export default Teachers;

const listStyle = {
  margin: '10px',
  padding: '10px',
  backgroundColor: '#fff',
  listStyleType: 'none',
  boxShadow: '0px 2px 10px #000',
  borderRadius: '10px',
  cursor: 'pointer',
};
