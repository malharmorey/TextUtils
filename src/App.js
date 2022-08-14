import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	//Alerts
	const createAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setInterval(() => {
			setAlert(null);
		}, 2800);
	};

	//Dark-Mode Toggle
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#15171a';
			document.getElementById('textContainer').style.backgroundColor =
				'#15171a';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			document.getElementById('textContainer').style.backgroundColor = 'white';
		}
	};

	return (
		<>
			<Navbar title='TextUtils' toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className='wholePage pt-3'>
				<div id='textContainer' className='container mx-auto'>
					<TextForm
						heading='Modify your Text'
						mode={mode}
						createAlert={createAlert}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
