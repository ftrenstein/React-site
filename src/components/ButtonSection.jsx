import { useState } from 'react';
import Button from './Button/Button';
import { differences } from '../data';

export default function ButtonSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Чем мы отличемся от других</h3>
      <Button
        isActive={contentType === 'way'}
        buttonClicked={() => handleClick('way')}
      >
        Подход
      </Button>
      <Button buttonClicked={() => handleClick('easy')}>Дисциплина </Button>
      <Button buttonClicked={() => handleClick('program')}>
        <span>Effort</span>
      </Button>
      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <p>Выберите тип контента</p>
      )}
    </section>
  );
}
