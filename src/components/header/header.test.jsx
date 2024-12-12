import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./header";

test('A navegação do menu está correta', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/favoritos" element={<div>Favoritos</div>} />
        <Route path="/filmes" element={<div>Filmes</div>} />
        <Route path="/tv" element={<div>Programas de TV</div>} />
      </Routes>
    </MemoryRouter>
  );


  userEvent.click(screen.getByText(/Home/i));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Meus Favoritos/i));
  expect(screen.getByText(/Favoritos/i)).toBeInTheDocument();


  userEvent.click(screen.getByText(/Filmes/i));
  expect(screen.getByText(/Filmes/i)).toBeInTheDocument();


  userEvent.click(screen.getByText(/Programas de TV/i));
  expect(screen.getByText(/Programas de TV/i)).toBeInTheDocument();
});
