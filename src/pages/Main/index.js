import React, { useState, useRef, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import InputMask from "react-input-mask";

import {
  Container,
  ModalBackground,
  Modal,
  Cep,
  BtnSearch,
  BtnBlue,
  BtnCancel
} from "./styles";

export default function Main() {
  const [clientes, setClientes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [tipo, setTipo] = useState();
  const [errorTipo, setErrorTipo] = useState(false);
  const [cep, setCep] = useState();
  const [documento, setDocumento] = useState();
  const [errorDocumento, setErrorDocumento] = useState(false);
  const [nomeRazao, setNomeRazao] = useState();
  const [errorNomeRazao, setErrorNomeRazao] = useState(false);
  const [nomeFantasia, setNomeFantasia] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [errorEmail, setErrorEmail] = useState(false);

  useEffect(() => {
    const clients = localStorage.getItem("clientes");
    if (clients) {
      setClientes(JSON.parse(clients));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  const values = {
    codigo: clientes.length + 1,
    tipo_cliente: tipo,
    documento,
    nome_razao: nomeRazao,
    nome_fantasia: nomeFantasia,
    cep,
    endereco,
    cidade,
    telefone,
    email
  };
  async function searchAddress() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.data.logradouro) {
        toast.warn(
          "Nao foi encontrada nenhuma rua ou cidade com esse cep, porem ele é valido. Preencha manualmente"
        );
      } else {
        setEndereco(response.data.logradouro);
        setCidade(response.data.localidade);
        toast.success("Dados encontrados");
      }
    } catch (err) {
      toast.error("Informe um CEP valido.");
    }
  }

  async function handleSubmit() {
    if (!tipo) {
      setErrorTipo(true);
      return;
    } else {
      setErrorTipo(false);
    }

    if (!documento) {
      setErrorDocumento(true);
      return;
    } else {
      setErrorDocumento(false);
    }

    if (!nomeRazao) {
      setErrorNomeRazao(true);
      return;
    } else {
      setErrorNomeRazao(false);
    }

    if (!email) {
      setErrorEmail(true);
      return;
    } else {
      setErrorEmail(false);
    }

    setClientes([...clientes, values]);

    setTipo("0");
    setDocumento("");
    setNomeRazao("");
    setNomeFantasia("");
    setCep("");
    setEndereco("");
    setCidade("");
    setTelefone("");
    setEmail("");
    document.getElementById("cadastro").reset();
    setVisible(false);
  }

  return (
    <Container>
      <ModalBackground visible={visible}>
        <Modal className="AnswerModal" visible={visible}>
          <h1>Novo Cliente</h1>

          <form id="cadastro">
            <div>
              <div>
                <label htmlFor="tipo_cliente">Tipo Pessoa</label>
                <select
                  placeholder="Tipo pessoa"
                  onChange={e => setTipo(e.target.value)}
                >
                  <option value="0">Selecione...</option>
                  <option value="1">FISICA</option>
                  <option value="2">JURIDICA</option>
                </select>

                {errorTipo && <span>Campo obrigatorio</span>}
              </div>
              <div>
                <label htmlFor="cnpj_cpf">
                  {" "}
                  {tipo === "2" ? "CNPJ" : "CPF"}
                </label>
                <InputMask
                  label="CPF/CNPJ"
                  mask={tipo === "2" ? "99.999.999/9999-99" : "999.999.999-99"}
                  onChange={e => setDocumento(e.target.value)}
                />
                {errorDocumento && <span>Campo obrigatorio</span>}
              </div>
              <div>
                <label htmlFor="nome_razao">Nome/Razao</label>
                <input
                  label="Nome/Razao"
                  placeholder=""
                  onChange={e => setNomeRazao(e.target.value)}
                />
                {errorNomeRazao && <span>Campo obrigatorio</span>}
              </div>
              {tipo === "2" && (
                <div>
                  <label htmlFor="nome_fantasia">Nome Fantasia</label>
                  <input
                    label="Nome Fantasia"
                    onChange={e => setNomeFantasia(e.target.value)}
                  />
                </div>
              )}
              <Cep>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  onChange={e => setCep(e.target.value)}
                />

                <BtnSearch type="button" onClick={searchAddress}>
                  <MdSearch size={22} color="#fff" />
                </BtnSearch>
              </Cep>
              <div>
                <label htmlFor="endereco">Endereco</label>
                <input
                  label="Endereco"
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  label="Cidade"
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input label="Email" onChange={e => setEmail(e.target.value)} />
                {errorEmail && <span>Campo obrigatorio</span>}
              </div>
              <div>
                <label htmlFor="telefone">Telefone</label>
                <InputMask
                  label="Telefone"
                  mask="(99) 99999-9999"
                  onChange={e => setTelefone(e.target.value)}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <BtnCancel type="button" onClick={() => setVisible(false)}>
                <div>CANCELAR</div>
              </BtnCancel>
              <BtnBlue type="submit" onClick={handleSubmit}>
                <div>SALVAR</div>
              </BtnBlue>
            </div>
          </form>
        </Modal>
      </ModalBackground>

      <header>
        <BtnBlue onClick={() => setVisible(true)} width="90px">
          <FaPlusCircle color="#fff" size={22} />
          <span>NOVO</span>
        </BtnBlue>
      </header>

      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Endereco</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes &&
            clientes.map(cliente => (
              <tr key={String(cliente.codigo)}>
                <td>{cliente.codigo}</td>
                <td>{cliente.nome_razao}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
