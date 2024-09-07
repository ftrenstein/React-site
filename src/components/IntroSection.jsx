// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centred">Как мы обучаем</h1>
//       <h3 className="centred" style={{ color: '#666' }}>
//         Устроитесь на работу или вернем деньги, после прохождения полной
//         программы.
//       </h3>
//     </section>
//   );
// }

import React from 'react';
export default function IntroSection() {
  return React.createElement('section', null, [
    React.createElement('h1', { className: 'centred', key: 1 }, 'Titre'),
    React.createElement(
      'h3',
      { className: 'centred', style: { color: '#666' }, key: 2 },
      'Texte'
    ),
  ]);
}
