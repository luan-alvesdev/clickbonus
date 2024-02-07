const Mensagem = ({ mensagem, status }) => {
  return (
    <span className={status === "sucesso" ? "verde" : "erro"}>{mensagem}</span>
  );
};

export default Mensagem;
