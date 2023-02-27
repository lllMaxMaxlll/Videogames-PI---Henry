import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showAllGames, getVideogamesByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		// If no name, recover all
		if (text === undefined) {
			dispatch(showAllGames());
			return;
		}
		// Dispatch with name from state
		dispatch(getVideogamesByName(text));
		setText("");
	};

	return (
		<div className={style.searchContainer}>
			<div className={style.formGroup}>
				<input
					className={style.formField}
					value={text}
					key='text'
					type='text'
					placeholder='Search by name'
					onChange={handleChange}
				/>
				<label for='search by name' className={style.formLabel}>
					Search by name
				</label>
			</div>
			<div className={style.buttonsContainer}>
				<button
					disabled={!text}
					onClick={() => {
						handleSearch(text);
					}}>
					Search
				</button>
				<button
					onClick={() => {
						handleSearch();
					}}>
					All Games
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
