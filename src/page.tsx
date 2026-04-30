import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
// ESTILIZAÇÃO
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <CountDown></CountDown>
      </Container>
    </>
  );
}
