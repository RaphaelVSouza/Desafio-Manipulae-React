import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

import { itemsFetchData } from 'store/actions/fetchItems'
import { lastPlayerOn } from 'store/actions/lastPlayerOn'

import MusicsList from 'components/MusicsList'

import { TrackProps } from 'types/api'

import Pagination from 'components/Pagination'
import Container from 'components/Container'
import Header from 'components/Header'

type PageMusicSearchProps = {
  fetchData: (url: string) => void
  lastPlayerId: number
  pagination: (page: number) => void
  currentPage: number
  items: {
    data: Array<TrackProps>
    total: number
  }
  search: string
}

const PageMusicCharts = ({
  fetchData,
  items,
  search,
}: PageMusicSearchProps) => {
  const corsProxyUrl = 'https://cors-anywhere-raphael.herokuapp.com'
  const [currentPage, setCurrentPage] = useState(1)

  const { q } = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  })

  const searchQuery = q ? q : search

  lastPlayerOn(-1)

  useEffect(() => {}, [items])

  const limit = 5

  useEffect(() => {
    fetchData(
      `${corsProxyUrl}/https://api.deezer.com/search?q=${searchQuery}&index=${
        limit * currentPage + 1
      }&limit=${limit}`
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, currentPage])

  return (
    <>
      <Header />
      <Container>
        {items && (
          <>
            {' '}
            <MusicsList tracks={items.data} />
            <Pagination
              limit={limit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={items.total}
            />{' '}
          </>
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
    lastPlayerId: state.lastPlayerReducer,
    search: state.searchReducer,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (url: string) => dispatch(itemsFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMusicCharts)
