import "./SearchForm.css";

export default function SearchForm() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-form__input-fields">
        <button
          aria-label="Поиск"
          type="submit"
          className="search-form__form-submit"
        ></button>
        <input
          className="search-form_input"
          name="search"
          id="search"
          placeholder="Найти..."
          type="text"
          required
          autoComplete="off"
        />
      </div>
    </form>
  );
}
