import { Avatar } from "./Avatar";
import { Icono } from "./Icono";
import { Info } from "./Info";

export const Senyor = (props) => {
  const {
    senyor: { foto, nombre, profesion, estado, twitter, marcado },
  } = props;
  return (
    <article
      className={`senyor ${marcado ? "marcado " : ""}col-8 offset-2 mb-4`}
    >
      <div className="row">
        <Avatar foto={foto} nombre={nombre} />
        <Info
          nombre={nombre}
          profesion={profesion}
          estado={estado}
          twitter={twitter}
        />
      </div>
      <Icono />
    </article>
  );
};
