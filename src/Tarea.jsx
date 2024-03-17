import { useEffect } from "react";
import CloseButton from 'react-bootstrap/CloseButton';

export const Tarea = ({ tarea, eliminar }) => {
  return (
    <>
      <li className="text-start mb-2 bg-light p-2 text-black rounded-2 d-flex justify-content-between">
        {tarea?.nombre}
        <CloseButton onClick={() => eliminar(tarea)}/>
      </li>
    </>
  );
};
