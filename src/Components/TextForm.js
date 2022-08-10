import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import '../index.css';

export default function TextForm(props) {
	const [text, setText] = useState('');

	const handleUpperCaseClick = () => {
		setText(text.toUpperCase());
	};
	const handleLowerCaseClick = () => {
		setText(text.toLowerCase());
	};
	const handleTitleCaseClick = () => {
		setText(
			text
				.toLowerCase()
				.split(' ')
				.map(function (word) {
					return word.charAt(0).toUpperCase() + word.slice(1);
				})
				.join(' ')
		);
	};

	const handleDownloadClick = () => {
		var blob = new Blob([text], {
			type: 'text/plain;charset=utf-8',
		});

		saveAs(blob, 'YourText.txt');
	};

	const handleRemoveWhiteSpace = () => {
		setText(text.replace(/\s+/g, ' ').trim());
	};
	const handleClearText = () => {
		setText('');
		alert('Content Cleared!');
	};
	const handleCopyText = () => {
		navigator.clipboard.writeText(text);
		alert('Content Copied to the Clipboard!');
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
						value={text}
						onChange={handleOnChange}
						id='inputBox'
						rows='6'
					></textarea>
				</div>
				<button
					className='btn btn-primary'
					onClick={handleUpperCaseClick}
				>
					UPPER CASE
				</button>
				<button
					className='btn btn-primary mx-4'
					onClick={handleLowerCaseClick}
				>
					lower case
				</button>
				<button
					className='btn btn-primary'
					onClick={handleTitleCaseClick}
				>
					Title Case
				</button>
				<button
					className='btn btn-primary mx-4'
					onClick={handleRemoveWhiteSpace}
				>
					Remove white space
				</button>
				<button
					className='btn btn-primary '
					onClick={handleDownloadClick}
				>
					Download text
				</button>
				<button
					className='btn btn-primary mx-4'
					onClick={handleClearText}
				>
					Clear text
				</button>
				<button className='btn btn-primary' onClick={handleCopyText}>
					Copy text
				</button>
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
					<strong>Words and</strong> {text.length}{' '}
					<strong>Characters.</strong>
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
