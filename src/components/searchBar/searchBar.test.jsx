import { render, screen } from "@testing-library/react";
import SearchBar from "./searchBar";

  

  test('Pesquisa renderiza?', () => {
    const container = render(<SearchBar />);
    screen.debug()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    
  });
  