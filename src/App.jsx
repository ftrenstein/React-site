
import Header from './components/Header';
import Button from './components/Button/Button';
import WayToTech from './components/WayToTech';
import {ways} from './data';
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Here is some content.</h3>
          <ul>
            <WayToTech title={ways[0].title} description={ways[0].description}/>
            <WayToTech {... ways[1]}/>
            <WayToTech title={ways[2].title} description={ways[2].description}/>
            <WayToTech title={ways[3].title} description={ways[3].description}/>
            </ul>
        </section>
        <section>
          <h3>Чем мы отличемся от других</h3>
          <Button>Подход к обучению</Button>
          <Button>Подход к </Button>
          <Button>обучению</Button>



          </section>
      </main>
    </div>
  );
}


