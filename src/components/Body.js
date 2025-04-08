import React from "react";

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

const Body = () => {
  return (
    <div className="container mb-5">
      <h3>Partidos</h3>
      <ul id="fixture" className="list-group">
        {partidos.map((partido, index) => (
          <li key={index} className="list-group-item">
            <h6 className="text-decoration-underline mb-1">{partido.tipo}</h6>
            <h5 className="fw-bold mb-1 text-secondary">
              Bastilla {partido.res1}x{partido.res2} {partido.rival}
            </h5>
            <p className="mb-0">
              <strong>Fecha:</strong> {partido.fecha} | <strong>Hora:</strong> {partido.hora} | <strong>Cancha:</strong> {partido.cancha}
            </p>
            <p className="mb-0">
              <strong>Ubicación:</strong> {partido.ubicacion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
