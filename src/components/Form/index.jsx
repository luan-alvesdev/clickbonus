import React, { useState } from "react";
import Input from "./Input";
import useValidacao from "../../hooks";
import Mensagem from "../Mensagem";

export default function Form() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
  });

  const { erro, status, setStatus, validacao } = useValidacao(usuario);

  function submeterFormulario(evento) {
    evento.preventDefault();

    if (!validacao()) return;

    setStatus("sucesso");

    setUsuario({
      nome: "",
      email: "",
      telefone: "",
      cep: "",
    });
  }

  return (
    <form onSubmit={submeterFormulario} noValidate>
      <Input
        type="text"
        name="nome"
        label="Nome"
        valor={usuario.nome}
        enviarDadosDosInputs={(value) =>
          setUsuario({ ...usuario, nome: value })
        }
        status={status}
        mensagemErro={erro.nome}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        valor={usuario.email}
        enviarDadosDosInputs={(value) =>
          setUsuario({ ...usuario, email: value })
        }
        status={status}
        mensagemErro={erro.email}
      />
      <div className="form-div">
        <Input
          type="texto"
          name="telefone"
          label="Telefone"
          valor={usuario.telefone}
          enviarDadosDosInputs={(value) =>
            setUsuario({ ...usuario, telefone: value })
          }
          status={status}
          mensagemErro={erro.telefone}
        />

        <Input
          type="number"
          name="cep"
          label="Cep"
          valor={usuario.cep}
          enviarDadosDosInputs={(value) =>
            setUsuario({ ...usuario, cep: value })
          }
          status={status}
          mensagemErro={erro.cep}
        />
      </div>
      {status === "sucesso" && (
        <Mensagem status={status} mensagem="Usuário cadastrado com sucesso" />
      )}
      <button type="submit">Quero participar!</button>
    </form>
  );
}
