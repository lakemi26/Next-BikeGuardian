'use client';
import './Formularios.css'
import { useState } from "react";
import axios from 'axios';

const Formulario = () => {
    const [formData, setFormData] = useState({
      nome: '',
      nascimento: '',
      cpf: '',
      rg: '',
      nacionalidade: '',
      emissaoRg: '',
      uf: '',
      orgaoEmissorRg: '',
      email: '',
      telefone: '',
      genero: [],
      estadoCivil: '',
      escolaridade: '',
      endereco: '',
      numero: '',
      complemento: '',
      cep: '',
      cidade: '',
      concordoTermosUso: false,
      concordoContrato: false,
      receberSms: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await axios.post('http://seu-backend/api/formulario/enviar-dados', formData);
          console.log(response.data);
      } catch (error) {
          console.error('Erro ao enviar os dados:', error);
      }
  
  };
  
    return (
      <div className="form-container">
          <h1>Cadastro Pessoal</h1>
        <form onSubmit={handleSubmit}>
  
          <label className='campo'>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder= "Nome completo"
              errorMessage=
                  "Verifique seu nome!"
              label= "Nome"
              pattern= "^[A-Za-z0-9]{3,16}$"
              required
            />
          </label>
          
          <label className='campo'>
            Data de Nascimento:
            <input
              type="date"
              name="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
              required
            />
          </label>
  
          <label className='campo'>
          CPF:
          <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="Digite seu CPF"
              pattern="^\d{11}$"
              required
          />
          </label>
  
          <label className='campo'>
          RG:
          <input
              type="text"
              name="rg"
              value={formData.rg}
              onChange={handleChange}
              placeholder="Digite seu RG"
              pattern="^\d{9}$"
              required
          />
          </label>
  
          <label className='campo'>
          Nacionalidade:
          <input
              type="text"
              name="nacionalidade"
              value={formData.nacionalidade}
              onChange={handleChange}
              placeholder="Digite sua nacionalidade"
              required
          />
          </label>
  
          <label className='campo'>
          Data de Emissão do RG:
          <input
              type="date"
              name="emissaoRg"
              value={formData.emissaoRg}
              onChange={handleChange}
              required
          />
          </label>
  
          <label className='campo'>
          UF:
          <input
              type="text"
              name="uf"
              value={formData.uf}
              onChange={handleChange}
              placeholder="Digite a UF"
              maxLength="2"
              pattern="^[A-Z]{2}$"
              required
          />
          </label>
  
          <label className='campo'>
          Orgão Emissor do RG:
          <input
              type="text"
              name="orgaoEmissorRg"
              value={formData.orgaoEmissorRg}
              onChange={handleChange}
              placeholder="Digite o orgão emissor do RG"
              required
          />
          </label>
  
          <label className='campo'>
          Email:
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              required
          />
          </label>
  
          <label className='campo'>
          Telefone:
          <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
              required
          />
          </label>
  
          {/* Checkbox para Gênero */}
          <div className='checkbox'>
          Gênero:
          <label >
              <input
              type="radio"
              name="genero"
              value="mulher"
              checked={formData.genero === 'mulher'}
              onChange={handleChange}
              required
              /> Mulher
          </label>
          <label>
              <input
              type="radio"
              name="genero"
              value="homem"
              checked={formData.genero === 'homem'}
              onChange={handleChange}
              /> Homem
          </label>
          <label >
              <input
              type="radio"
              name="genero"
              value="outros"
              checked={formData.genero === 'outros'}
              onChange={handleChange}
              /> Outros
          </label>
          </div>
  
          <div className='checkbox'>
          Estado Civil:
          <label >
              <input
              type="radio"
              name="estadoCivil"
              value="solteiro"
              checked={formData.estadoCivil === 'solteiro'}
              onChange={handleChange}
              required
              /> Solteiro
          </label>
          <label>
              <input
              type="radio"
              name="estadoCivil"
              value="casado"
              checked={formData.estadoCivil === 'casado'}
              onChange={handleChange}
              /> Casado
          </label>
          <label>
              <input
              type="radio"
              name="estadoCivil"
              value="divorciado"
              checked={formData.estadoCivil === 'divorciado'}
              onChange={handleChange}
              /> Divorciado
          </label>
          <label>
              <input
              type="radio"
              name="estadoCivil"
              value="viuvo"
              checked={formData.estadoCivil === 'viuvo'}
              onChange={handleChange}
              /> Viúvo
          </label>
          </div>
  
          <div className='checkbox'>
          Escolaridade:
          <label>
              <input
              type="radio"
              name="escolaridade"
              value="fundamental"
              checked={formData.escolaridade === 'fundamental'}
              onChange={handleChange}
              required
              /> Fundamental
          </label>
          <label>
              <input
              type="radio"
              name="escolaridade"
              value="medio"
              checked={formData.escolaridade === 'medio'}
              onChange={handleChange}
              /> Médio
          </label>
          <label>
              <input
              type="radio"
              name="escolaridade"
              value="superior"
              checked={formData.escolaridade === 'superior'}
              onChange={handleChange}
              /> Superior
          </label>
          <label>
              <input
              type="radio"
              name="escolaridade"
              value="superiorIncompleto"
              checked={formData.escolaridade === 'superiorIncompleto'}
              onChange={handleChange}
              /> Superior Incompleto
          </label>
          </div>
          
  
          <label className='campo'>
          Endereço:
          <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Digite seu endereço"
              required
          />
          </label>
  
          <label className='campo'>
          Número:
          <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              placeholder="Digite o número"
              required
          />
          </label>
  
          <label className='campo'>
          Complemento:
          <input
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              placeholder="Digite o complemento"
              required
          />
          </label>
  
          <label className='campo'>
          CEP:
          <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="Digite o CEP"
              pattern="^\d{8}$"
              required
          />
          </label>
  
          <label className='campo'>
          Cidade:
          <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Digite a cidade"
              required
          />
          </label>
  
          {/* Checkbox para Concordo com os Termos de Uso */}
          <label>
            <input
              type="checkbox"
              name="concordoTermosUso"
              checked={formData.concordoTermosUso}
              onChange={handleChange}
              required
            /> Concordo com os Termos de Uso
          </label>
  
          {/* Checkbox para Declaro que li o Contrato */}
          <label>
            <input
              type="checkbox"
              name="concordoContrato"
              checked={formData.concordoContrato}
              onChange={handleChange}
              required
            /> Declaro que li o Contrato e concordo com todos os tópicos listados
          </label>
  
          {/* Checkbox para Receber SMS com informações sobre o clima */}
          <label>
            <input
              type="checkbox"
              name="receberSms"
              checked={formData.receberSms}
              onChange={handleChange}
            /> Desejo receber SMS com informações sobre o clima na minha região
          </label>
  
          
  
          
          <button type="submit">
              <a href="/CadastroBike">Enviar</a>
          </button>
          
        </form>
      </div>
    );
  };
  
  export default Formulario;