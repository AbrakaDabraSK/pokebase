import { useState, FormEvent } from 'react'

const Search: React.FC = () => {
  const [terms, setTerms] = useState('')

  const submitForm = (e: FormEvent) => {
    e.preventDefault()

    if (terms.length < 3) return null

    // SearchAutocompletePublisher(terms)
    setTerms('')
  }
  
  return (
    <form 
      className="max-w-full px-4 w-160"
      onSubmit={submitForm}
    >
      <div className="relative flex items-center bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
        <i className='pl-4 pr-3 text-gray-500 bx bx-search-alt'></i>
        <input 
          className="py-1 pr-3 bg-transparent rounded focus:outline-none"
          type="text"
          value={terms}
          onChange={e => setTerms(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Search