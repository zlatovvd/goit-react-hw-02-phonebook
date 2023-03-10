import css from './Filter.module.css';

const Filter = ({ filter, handleChange }) => (
  
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
      id="filter"
      name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={handleChange}
      />
    </label>
);

export default Filter;
