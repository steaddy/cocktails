import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setTimeout(()=>{
      setSearchTerm(searchValue.current.value);
      }, 1500)
  };

  const submitForm = e => {
    e.preventDefault();
  };

  useEffect(()=>{
    searchValue.current.focus();
  }, [])

  return (
    <section className='search section'>
      <form className="search-form" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
