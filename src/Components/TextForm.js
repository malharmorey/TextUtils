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
		props.createAlert('Downloading has started!', 'success');
	};

	const handleRemoveWhiteSpace = () => {
		setText(text.replace(/\s+/g, ' ').trim());
	};

	const handleClearText = () => {
		return window.confirm('Are you sure you want to clear text?')
			? (setText(''), props.createAlert('Content Cleared!', 'danger'))
			: setText(text);
	};

	const handleCopyText = () => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				props.createAlert('Content Copied to the Clipboard!', 'success');
			})
			.catch(() => {
				props.createAlert('Oops! error occured', 'danger');
			});
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<div
				style={{
					color: props.mode === 'light' ? 'black' : 'white',
				}}
			>
				<h1>{props.heading}</h1>
				<div className='mb-3'>
					<textarea
						className='form-control'
						placeholder='Paste your content here!'
						value={text}
						onChange={handleOnChange}
						id='inputBox'
						rows='6'
						style={{
							backgroundColor: props.mode === 'light' ? 'white' : '#15171a',
							color: props.mode === 'light' ? 'black' : 'white',
						}}
					></textarea>
				</div>
				<button
					className='btn btn-primary me-4 my-1'
					onClick={handleUpperCaseClick}
					disabled={text.length === 0}
				>
					UPPER CASE
				</button>
				<button
					className='btn btn-primary me-4 my-1'
					onClick={handleLowerCaseClick}
					disabled={text.length === 0}
				>
					lower case
				</button>
				<button
					className='btn btn-primary me-4'
					onClick={handleTitleCaseClick}
					disabled={text.length === 0}
				>
					Title Case
				</button>
				<button
					className='btn btn-primary me-4 my-1'
					onClick={handleRemoveWhiteSpace}
					disabled={text.length === 0}
				>
					Remove white space
				</button>
				<button
					className='btn btn-primary me-4'
					onClick={handleDownloadClick}
					disabled={text.length === 0}
				>
					Download text
				</button>
				<button
					className='btn btn-primary me-4 my-1'
					onClick={handleClearText}
					disabled={text.length === 0}
				>
					Clear text
				</button>
				<button
					className='btn btn-primary me-4 my-1'
					onClick={handleCopyText}
					disabled={text.length === 0}
				>
					Copy text
				</button>
			</div>
			<div
				className='container my-4 p-0'
				style={{
					color: props.mode === 'light' ? 'black' : 'white',
				}}
			>
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
				<h2>Preview:</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
