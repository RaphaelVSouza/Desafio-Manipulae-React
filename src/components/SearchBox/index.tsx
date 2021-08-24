import { Formik, Form, FormikHelpers } from 'formik'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import qs from 'qs'

import { searchItems } from 'store/actions/searchItems'
import TextField from 'components/TextField'
import * as S from './styles'

type SearchProps = {
  searchContent: string
}

type SearchBoxProps = {
  searchTracks: (searchQuery: string) => void
  searchQuery: string
}

const SearchBox = ({ searchTracks, searchQuery }: SearchBoxProps) => {
  const history = useHistory()

  function handleSearch(
    values: SearchProps,
    { setSubmitting }: FormikHelpers<SearchProps>
  ) {
    history.push({
      pathname: '/search',
      search: `${qs.stringify(
        { q: `${values.searchContent}` },
        { format: 'RFC1738' }
      )}`,
    })

    searchTracks(values.searchContent)

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        searchContent: '',
      }}
      onSubmit={handleSearch}
    >
      <Form>
        <S.Wrapper>
          <TextField
            name="searchContent"
            className="input"
            required
            placeholder="Artistas, músicas ou álbuns"
          />

          <S.SearchButton type="submit">
            <S.SearchIcon size="30" />
          </S.SearchButton>
        </S.Wrapper>
      </Form>
    </Formik>
  )
}

const mapStateToProps = (state: any) => {
  return {
    searchQuery: state.searchReducer,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchTracks: (searchQuery: string) => dispatch(searchItems(searchQuery)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
