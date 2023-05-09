import { render, screen } from '@testing-library/react';
import App from './App';

// todolist에 3개의 todoitme이 존재한다. 
test('todoData array lentgh is three', () => {
  render(<App />);
  const length = screen.getByTestId("todoDataLength");
  expect(length).toHaveTextContent("3");
});
