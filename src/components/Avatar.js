export const Avatar = (props) => {
  const { foto, nombre } = props;
  return (
    <div className="avatar col">
      <img
        src={`img/${foto}`}
        className="img-fluid rounded-circle"
        width="214"
        alt={`${nombre} apuntándote con el dedo`}
      />
      <span className="inicial text-center rounded-circle"></span>
    </div>
  );
};
