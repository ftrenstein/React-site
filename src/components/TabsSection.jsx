import Button from './Button/Button';

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button
        isActive={active === 'main'}
        onClick={() => {
          console.log('Switching to main tab');
          onChange('main');
        }}
      >
        Главная
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClick={() => {
          console.log('Switching to feedback tab');
          onChange('feedback');
        }}
      >
        Отзывы
      </Button>
    </section>
  );
}
