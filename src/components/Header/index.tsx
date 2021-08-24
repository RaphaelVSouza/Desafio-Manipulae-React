import SearchBox from 'components/SearchBox'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <SearchBox />
    <S.Anchor to="/charts" style={{ fontSize: '22px', fontWeight: 600 }}>
      Top Charts
    </S.Anchor>
    <S.Anchor to="/">
      <span>Suas músicas</span>
      <S.MusicNoteIcon size="28" />
    </S.Anchor>
  </S.Wrapper>
)

export default Header
