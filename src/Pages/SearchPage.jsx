import React from 'react'
import SearchContent from '../Component/SearchContent'
import Header from '../Component/Header'
import MovieModal from '../Modal/MovieModal'
import ErrorBoundary from '../Component/ErrorBoundary'


function SearchPage() {
  return (
    <>
        <div className="bg-black min-h-screen">
        <Header />
        <ErrorBoundary>
          <SearchContent /> 
</ErrorBoundary>
      </div>
      <MovieModal />
    </>
  )
}

export default SearchPage