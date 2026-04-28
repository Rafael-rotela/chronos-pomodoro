import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('Olá mundo');

  return (
    <>
      <Heading> Olá mundo </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eveniet
        omnis in dicta minima cumque voluptate enim, dolor quia ut voluptatem
        impedit expedita consequatur vel! Unde cupiditate et eveniet rerum.
      </p>
    </>
  );
}
