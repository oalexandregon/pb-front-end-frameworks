import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"; 
import Card from "./Card";
import { vi } from 'vitest';  


vi.mock("../../context", () => ({
  useAppContext: () => ({
    favorites: [],
    toggleFavorite: vi.fn(),
  }),
}));

test('Link redireciona para URL correta', () => {
  const data = {
    id: 1,
    backdrop_path: "/path/to/image.jpg",
    name: "Nome do Show",
    title: "Nome do Show 2",
    vote_average: "10",
  };

  render(
    <MemoryRouter>
      <Card data={data} type="TV" />
    </MemoryRouter>
  );

  
  screen.debug();


  expect(screen.getByRole('link')).toHaveAttribute('href', '/1');
});

