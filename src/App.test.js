import { render, screen } from '@testing-library/react';
import App from './App';
import { Table } from './Table';


test('render h1 element',()=>{
  render(<App />);
  screen.debug();
  expect(screen.getByText('Table')).toBeInTheDocument();
})

// test('render Table element',()=>{
//   render(<Table/>)
//   screen.debug();
//   expect(screen.getByDisplayValue('Name')).toBeInTheDocument();
// })
// test('renders learn react link', () => {
//   //render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   //render.call(App)
//  // expect(App).toBeInTheDocument();
//   expect(linkElement).toBeInTheDocument();
// });
