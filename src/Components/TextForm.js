import React, { useState } from 'react'; // First Import State you want to use.

//In order to use react-Bootstrap we need to install its npm package and import it here.
export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // Without this event handler we were unable to write at text area, this is kinda compulsory.
    setText(event.target.value);
  };

  const [text, setText] = useState();
  //text = 'new text'; // Wrong way to change state.
  //setText('new text'); // Correct way to change state.
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className='mb-3'>
        <textarea
          className='form-control'
          placeholder='Paste your content here!'
          value={text}
          onChange={handleOnChange}
          id='inputBox'
          rows='8'
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpperCaseClick}>
        To UpperCase
      </button>
    </div>
  );
}
