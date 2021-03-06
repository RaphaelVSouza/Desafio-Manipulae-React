import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { itemsFetchData } from 'store/actions/fetchItems'
import { lastPlayerOn } from 'store/actions/lastPlayerOn'

import MusicsList from 'components/MusicsList'
import Pagination from 'components/Pagination'

import { TrackProps } from 'types/api'
import Header from 'components/Header'
import Container from 'components/Container'

type PageChartProps = {
  fetchData: (url: string) => void
  items: {
    data: Array<TrackProps>
    total: number
  }
}

const PageMusicCharts = ({ fetchData, items }: PageChartProps) => {
  const corsProxyUrl = 'https://cors-anywhere-raphael.herokuapp.com'
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const limit = 20
    fetchData(
      `${corsProxyUrl}/https://api.deezer.com/chart/0/tracks?index=${
        limit * currentPage
      }&limit=${limit}`
    )
    lastPlayerOn(-1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    console.log({ items })
  }, [items])

  const limit = 5

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
  console.log(state.items)
  return {
    items: state.items,
    lastPlayerId: state.lastPlayerReducer,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (url: string) => dispatch(itemsFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMusicCharts)
