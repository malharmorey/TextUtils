import React from 'react';

export default function Alert(props) {
	const capitalCase = (word) => {
		return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
	};
	return (
		props.alert && (
			<div>
				<div
					className={`alert alert-${props.alert.type} alert-dismissible fade show`}
					role='alert'
				>
					<strong>{capitalCase(props.alert.type)}</strong>:{' '}
					{props.alert.message}
				</div>
			</div>
		)
	);
}
