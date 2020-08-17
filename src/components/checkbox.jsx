import React, {useState} from 'react';


export default function Checkbox(props) {
	const [isChecked, setIsChecked] = useState(props.value);

	function toggleCheckboxChange() {
		setIsChecked(!isChecked);

		if (typeof props.handleCheckboxChange === 'function') {
			props.handleCheckboxChange(props.name, !isChecked);
		}
	}

	return (
		<div className={props.classes}>
			<label>
				<input
					type="checkbox"
					name={props.name}
					checked={isChecked}
					onChange={toggleCheckboxChange}
				/>
			</label>
		</div>
	);
}
