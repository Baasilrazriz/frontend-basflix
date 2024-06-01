import React from 'react'
import SearchContent from '../Component/SearchContent'
import Header from '../Component/Header'
import MovieModal from '../Modal/MovieModal'

function SearchPage() {
  return (
    <>
        <div className="bg-black min-h-screen">
        <Header />
          <SearchContent /> 
      </div>
      <MovieModal />
    </>
  )
}

export default SearchPage