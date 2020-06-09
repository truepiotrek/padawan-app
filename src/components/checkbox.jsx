import React, {useState} from 'react';

export default function Checkbox(props) {
	const [isChecked, setIsChecked] = useState(false);

	function toggleCheckboxChange() {
		setIsChecked(!isChecked);

		if (typeof props.handleCheckboxChange === 'function') {
			props.handleCheckboxChange(props.label);
		}
	}

	return (
		<div className={props.classes}>
			<label>
				<input
					type="checkbox"
					value={props.label}
					checked={isChecked}
					onChange={toggleCheckboxChange}
				/>
				<span className="checkmark">{props.label}</span>
			</label>
		</div>
	);
}
