import React, { Component } from 'react';
import './App.css';
// import './Notes.js';
import Notes from './Notes.js';

/* 
Manage four variables with state:
"title, note, titleList, and noteList"

Use the titleList and noteList to keep track of and save
all the notes the user writes down so we can display them
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      currentNote: {
        title: "",
        text: "",
        key: "",
      }
    };
    this.inputText = this.inputText.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

  }

  inputTitle = (e) => {
    this.setState({
      currentNote: {
        title: e.target.value,
        key: Date.now()
      }
    })
  }

  inputText = (e) => {
    this.setState({
      currentNote:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addNote = (e) => {
    // e.preventDefault();
    const newNote = this.state.currentNote;
    console.log(newNote);
    if(newNote.text !== "" && newNote.title != ""){
      const newNotes = [...this.state.notes, newNote];
      this.setState({
        notes: newNotes,
        currentNote: {
          title: '',
          text: '',
          key: ''
        }
      })
    } 

  }

  deleteNote = (key) => {
    const filteredNotes = this.state.notes.filter(note => note.key !== key);
    this.setState({
      notes: filteredNotes
    })
  }

clearNote = () => {
  if(this.state.currentNote.title !== "" && this.state.currentNote.text !== ""){
    this.setState({
      currentNote: {
        title: '',
        text: '',
        key: ''
      }
    });
  }
};

  render() { 
    return (
      <div className="App">
        <header className="App-header">

          {/* Using the HTML tag 'h1' to create the application header */ }
          <h1> Notes Application </h1>

          {/* Using the HTML tag 'label' to create a label for the notes title */ }
          <label> Title </label>

          {/* Using the HTML tag 'input' to create a space for users to create a title for their note */ }
          {/* Using 'onChange' because we input text and want the value to change as the text changes */ }
          {/* <input type="text" id="textArea" value={this.state.currentNote.title}  onChange={e=>this.getTitle(e)}>  */}
          <input type="text" id="textArea" value={this.state.currentNote.title}  onChange={e=>this.inputTitle(e)}> 
          </input>

          {/* Using the HTML tag 'textarea' to create the notes component */ }
          {/* Using 'onChange' because we input text and want the value to change as the text changes */ }
          {/* <textarea id="noteArea" value={this.state.currentNote.text}  onChange={e=>this.getNotes(e)}> */}
          <textarea id="noteArea" value={this.state.currentNote.text}  onChange={e=>this.inputText(e)}>
          </textarea>

          {/* Create note, uses 'onClick' function to call the 'saveNote' function */ }
          {/* Not sure if the button type should be 'submit' instead of 'button' */ }
          <button type="submit" onClick={()=>this.addNote()}>
            Save Note
          </button>

          {/* Clear note, uses 'onClick function to call the 'clearNote' function */ }
          {/* Not sure if the button type should be 'reset' instead of 'button' */ }
          <button type="submit" onClick={()=>this.clearNote()}>
            Clear Note
          </button>
        </header >

        <Notes
        notes = {this.state.notes}
          // title={this.state.titleList}
          // note={this.state.noteList}
        deleteNote = {this.deleteNote}
        /> 

      </div>
    );
  }
}

export default App;
