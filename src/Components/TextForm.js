import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpperCaseClick = () => {
    // let newText = text.toUpperCase();
    // setText(newText);
    setText(text.toUpperCase());
  };
  const handleLowerCaseClick = () => {
    // let newText = text.toLowerCase();
    // setText(newText);
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
          <textarea
            className='form-control'
            placeholder='Paste your content here!'
            value={text} // Since text is a state var, and by using this here we can now type inside the text area. for more exp watch CWH tut7 @18:00
            onChange={handleOnChange}
            id='inputBox'
            rows='6'
          ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpperCaseClick}>
          To UpperCase
        </button>
        <button className='btn btn-primary mx-4' onClick={handleLowerCaseClick}>
          To LowerCase
        </button>
        <button className='btn btn-primary' onClick={() => setText('')}>
          Clear Text
        </button>
        <button className='btn btn-primary mx-4'>Copy Text</button>
      </div>
      <div className='container my-4 p-0'>
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, ' ')
              .split(' ')
              .filter((value) => value !== '').length
          }{' '}
          <strong>Words and</strong> {text.length} <strong>Characters.</strong>
        </p>
        <p>
          {0.008 *
            text
              .replace(/\n/g, ' ')
              .split(' ')
              .filter((value) => value !== '').length}{' '}
          <strong>Minutes Read</strong>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
