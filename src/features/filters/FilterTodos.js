import React from 'react';
import { useDispatch } from "react-redux";
import { setFilterActive, setFilterAll, setFilterCompleted } from "../filters/filtersSlice"

const FilterBtn = () => {
	const dispatch = useDispatch();
	
	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<label className="label">Show:</label>
				<button value="All" onClick={e=> dispatch(setFilterAll(e.target.value))}>
					Show All
				</button>
				<button value="Active" onClick={e=> dispatch(setFilterActive(e.target.value))}>
					Active
				</button>
				<button value="Complete" onClick={e=> dispatch(setFilterCompleted(e.target.value))}>
					Completed
				</button>
			</form>
		</div>
	);
};

export default FilterBtn;