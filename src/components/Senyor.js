import { Avatar } from "./Avatar";
import { Icono } from "./Icono";
import { Info } from "./Info";

export const Senyor = () => {
  return (
    <article className="senyor senyor-molde col-8 offset-2 mb-4">
      <div className="row">
        <Avatar />
        <Info />
      </div>
      <Icono />
    </article>
  );
};
