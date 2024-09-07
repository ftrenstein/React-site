import Button from './Button/Button';
export default function FeedbackSection() {
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваш отзыв</label>
        <input type="text" id="name" className="control" />
        <label htmlFor="reason">Make a choise</label>
        <select id="reason" className="control">
          <option value="good">Хорошо</option>
          <option value="bad">Плохо</option>
        </select>
        <Button>Send</Button>
      </form>
    </section>
  );
}
