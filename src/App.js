import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
		}, 3000);
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
			<Router>
				<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className='wholePage pt-3'>
					<Routes>
						<Route exact path='/about' element={<About mode={mode} />}></Route>
						<Route
							exact
							path='/'
							element={
								<div id='textContainer' className='container mx-auto'>
									<TextForm
										heading='Modify your Text'
										mode={mode}
										createAlert={createAlert}
									/>
								</div>
							}
						></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
