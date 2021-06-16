export const Boton = (props) => {
  const { children, accion } = props;
  return <button onClick={accion}>{children}</button>;
};
