import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					{props.title}
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' to='/About'>
								About
							</Link>
						</li>
					</ul>
					<div className='darkMode mx-3'>
						<p className='d-print-inline-block text-light'>
							{props.mode === 'light' ? 'Dark' : 'Light'} Mode
						</p>
						<div className='switch'>
							<label className='theme-switch' htmlFor='checkbox'>
								<input
									type='checkbox'
									id='checkbox'
									onClick={props.toggleMode}
								/>
								<div className='slider round'></div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}


Navbar.propTypes = {
	title: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'Your Title here',
};
