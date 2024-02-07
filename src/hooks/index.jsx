import { useState } from "react";
import * as yup from "yup";

const useValidacao = (usuario) => {
  const [erro, setErro] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
  });

  const [status, setStatus] = useState("");

  async function validacao() {
    const validationSchema = yup.object().shape({
      cep: yup.string().required("O campo cep é obrigatório"),
      telefone: yup.string().required("O campo telefone é obrigatório"),
      email: yup
        .string()
        .email("O email digitado é inválido")
        .required("O campo email é obrigatório"),
      nome: yup.string().required("O campo nome é obrigatório"),
    });

    try {
      await validationSchema.validate(usuario, { abortEarly: false });
      return true;
    } catch (error) {
      const errors = {};

      error.inner.forEach((e) => {
        if (!errors[e.path]) {
          errors[e.path] = e.errors[0];
        }
      });

      setErro({ ...errors });
      setStatus("erro");
      return false;
    }
  }

  return {
    erro,
    status,
    setStatus,
    validacao,
  };
};

export default useValidacao;
