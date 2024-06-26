import { useId } from "react";
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handlechangeFilter = (evt) => dispatch(changeFilter(evt.target.value))

    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label className={css.labelSearch} htmlFor={searchId}>Find contacts by name</label>
            <input className={css.input} type="text" value={filter} id={searchId} onChange={handlechangeFilter} />
        </div>
    );
}

export default SearchBox;