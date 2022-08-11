import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
	const [mode, setMode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#15171a';
			document.getElementById('textContainer').style.backgroundColor =
				'#15171a';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			document.getElementById('textContainer').style.backgroundColor =
				'white';
		}
	};

	return (
		<>
			<Navbar title='TextUtils' toggleMode={toggleMode} />
			<div className='wholePage pt-3'>
				<div id='textContainer' className='container mx-auto'>
					<TextForm heading='Modify your Text' mode={mode} />
				</div>
			</div>
		</>
	);
}

export default App;
