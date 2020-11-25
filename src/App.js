import React from 'react';
import StudentForm from './SrudentForm';
import Student from './Student';
import Teachers from './Teachers';
import TeachersForm from './TeachersForm';

class App extends React.Component {
  state = {
    teachers: [
      { id: 1, name: 'Ronke' },
      { id: 2, name: 'Jack' },
      { id: 3, name: 'Smith' },
      { id: 4, name: 'Mark' },
      { id: 5, name: 'John' },
      { id: 6, name: 'Jin Mori' },
    ],
    students: [
      { id: 1, name: 'Ronke' },
      { id: 2, name: 'Jack' },
      { id: 3, name: 'Smith' },
      { id: 4, name: 'Mark' },
      { id: 5, name: 'John' },
      { id: 6, name: 'Jin Mori' },
    ],
  };

  addTeachers = (data) => {
    let newId = this.state.teachers.length + 1;
    const { name } = data;
    let newTeachers = { id: newId, name: name };
    this.setState({
      teachers: [...this.state.teachers, newTeachers],
    });
  };
  addStudents = (data) => {
    let newId = this.state.students.length + 1;
    const { name } = data;
    let newStudent = { id: newId, name: name };
    this.setState({
      students: [...this.state.students, newStudent],
    });
  };

  render() {
    const { teachers, students } = this.state;
    return (
      <div>
        <Teachers teachers={teachers} />
        <TeachersForm addTeachers={this.addTeachers} />
        <Student students={students} />
        <StudentForm addStudents={this.addStudents} />
      </div>
    );
  }
}

export default App;
