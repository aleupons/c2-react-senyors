export const Avatar = (props) => {
  const { foto, nombre } = props;
  const getInicial = (nombre) => {
    const partesNombre = nombre.split(" ");
    const posicion = partesNombre[0].length > 2 ? 0 : 1;
    return partesNombre[posicion].charAt(0).toUpperCase();
  };
  return (
    <div className="avatar col">
      <img
        src={`img/${foto}`}
        className="img-fluid rounded-circle"
        width="214"
        alt={`${nombre} apuntándote con el dedo`}
      />
      <span className="inicial text-center rounded-circle">
        {getInicial(nombre)}
      </span>
    </div>
  );
};
