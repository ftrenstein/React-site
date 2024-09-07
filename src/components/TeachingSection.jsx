import { ways } from '../data';
import WayToTech from './WayToTech';

export default function TeachingSection() {
  return (
    <section>
      <h3>Here is some content.</h3>
      <ul>
        {ways.map((way) => (
          <WayToTech key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
