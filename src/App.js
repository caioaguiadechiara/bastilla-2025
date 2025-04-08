import './App.css';

function App() {
  // Lista de los próximos partidos de Bastilla FC
  const partidos = [
    { res1: "2", res2: "3", fecha: "2025-04-03", rival: "Estudiantes de la Planta", hora: "9:30 PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "1ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-04-10", rival: "LPC", hora: "8:00 PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "2ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-04-17", rival: "Mota Classic", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "3ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-04-24", rival: "Canadiense", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "4ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-05-08", rival: "Canadiense", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "5ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-05-15", rival: "Artilleros", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "6ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-05-22", rival: "Pitizorri", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "7ª Jornada: LRU Senior" },
    { res1: "", res2: "", fecha: "2025-05-29", rival: "Real Nómades", hora: "?:?? PM", cancha: "?", ubicacion: "Sta. Rosa de Huechuraba, 6790", tipo: "8ª Jornada: LRU Senior" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="Bastilla FC" height="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wa.me/56978762996">
                Habla con nosotros
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner text-center">
        <img src="/banner.jpeg" alt="Bastilla FC" className="img-fluid" />
      </div>

      {/* Próximos partidos */}
      <div className="container my-5">
        <h3>Partidos</h3>
        <ul id='fixture' className="list-group">
          {partidos.map((partido, index) => (
            <li key={index} className="list-group-item">
              <h6 className='font-italic mb-1'><u>{partido.tipo}</u></h6>
              <h5 className='font-weight-bold mb-1 text-secondary'>Bastilla {partido.res1}x{partido.res2} {partido.rival}</h5>
              <p className='mb-0'><strong>Fecha:</strong> {partido.fecha} | <strong>Hora:</strong> {partido.hora} | <strong>Cancha:</strong> {partido.cancha}</p>
              <p className='mb-0'><strong>Ubicación:</strong> {partido.ubicacion}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Bastilla FC - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
