import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default function Navbar(props) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					{props.title}
				</a>
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
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='#'
							>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								About
							</a>
						</li>
					</ul>
					<div className='darkMode'>
						<p
							className={`d-print-inline-block text-${
								props.mode === 'light' ? 'dark' : 'light'
							}`}
						>
							Dark Mode
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
