import CadastroComErro from "../../Mensagem";

const Input = ({
  status,
  mensagemErro,
  name,
  type,
  value,
  label,
  enviarDadosDosInputs,
}) => {
  function enviarDados(evento) {
    evento.preventDefault();
    enviarDadosDosInputs(evento.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} valor={value} onChange={enviarDados} />
      {status === "erro" && <CadastroComErro mensagem={mensagemErro} />}
    </div>
  );
};

export default Input;
