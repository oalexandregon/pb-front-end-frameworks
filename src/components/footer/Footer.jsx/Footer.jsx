export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = function () {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <footer className=''>
        <h5>Todos os direitos reservados</h5>
      </footer>
    );
}