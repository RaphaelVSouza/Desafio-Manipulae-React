import SearchBox from 'components/SearchBox'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <SearchBox />
    <S.Anchor
      to="/charts"
      style={{ fontSize: '22px', fontWeight: 600, textAlign: 'center' }}
    >
      Top Charts
    </S.Anchor>
    <S.Anchor to="/">
      <S.MusicNoteIcon size="28" />
    </S.Anchor>
  </S.Wrapper>
)

export default Header
