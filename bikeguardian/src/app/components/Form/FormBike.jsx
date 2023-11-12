'use client';
import React, { useState } from 'react';
import '../Formularios/Formularios.css';
import axios from 'axios';


const FormulariosBike = () => {
    const [formData, setFormData] = useState({
      modelo: '',
      marca: '',
      cor: '',
      numeroserie: '',
      datacompra: '',
      localcompra: '',
      valorcompra: '',
      revisao: [],
      acessorio: [],
      plano: [],
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

      const handleAcessorioChange = (event) => {
        const { value } = event.target;
      
        setFormData(prevState => {
          if (prevState.acessorio.includes(value)) {
            return { ...prevState, acessorio: prevState.acessorio.filter(item => item !== value) };
          } else {
            return { ...prevState, acessorio: [...prevState.acessorio, value] };
          }
        });
    }

      return (
        <div className="form-container">
            <h1>Cadastro Bike</h1>
          <form onSubmit={handleSubmit}>
    
          <label className='campo'>
            Modelo da Bike:
            <input
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                placeholder="Modelo da Bike"
                errorMessage="Verifique o modelo!"
                label="Modelo"
                pattern="^[A-Za-z0-9\s]+$" 
                required
            />
            </label>

            <label className='campo'>
            Marca:
            <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                placeholder="Marca"
                errorMessage="Verifique a marca!"
                label="Marca"
                pattern="^[A-Za-z0-9\s]+$"
                required
            />
            </label>

            <label className='campo'>
            Cor:
            <input
                type="text"
                name="cor"
                value={formData.cor}
                onChange={handleChange}
                placeholder="Cor"
                errorMessage="Verifique a cor!"
                label="Cor"
                pattern="^[A-Za-z\s]+$"
                required
            />
            </label>

            <label className='campo'>
            Número de Série:
            <input
                type="text"
                name="numeroserie"
                value={formData.numeroserie}
                onChange={handleChange}
                placeholder="Número de Série"
                errorMessage="Verifique o número de série!"
                label="Número de Série"
                pattern="^[A-Za-z0-9\s]+$"
                required
            />
            </label>

            <label className='campo'>
            Data de Compra:
            <input
                type="date"
                name="datacompra"
                value={formData.datacompra}
                onChange={handleChange}
                errorMessage="Verifique a data de compra!"
                label="Data de Compra"
                required
            />
            </label>

            <label className='campo'>
            Local de Compra:
            <input
                type="text"
                name="localcompra"
                value={formData.localcompra}
                onChange={handleChange}
                placeholder="Local de Compra"
                errorMessage="Verifique o local de compra!"
                label="Local de Compra"
                pattern="^[A-Za-z\s]+$"
                required
            />
            </label>

            <label className='campo'>
            Valor de Compra:
            <input
                type="number"
                name="valorcompra"
                value={formData.valorcompra}
                onChange={handleChange}
                placeholder="Valor de Compra"
                errorMessage="Verifique o valor de compra!"
                label="Valor de Compra"
                required
            />
            </label>
    
            <div className='checkbox'>
            Você fez alguma revisão na sua bike no último ano?
            <label>
                <input
                type="radio"
                name="revisao"
                value="sim"
                checked={formData.revisao === 'sim'}
                onChange={handleChange}
                />
                Sim
            </label>
            <label>
                <input
                type="radio"
                name="revisao"
                value="nao"
                checked={formData.revisao === 'nao'}
                onChange={handleChange}
                />
                Não
            </label>
            </div>

            <div className='checkbox'>
            Você possui algum acessório na sua bike?
            <label>
                <input
                type="checkbox"
                name="acessorio"
                value="GPS"
                checked={formData.acessorio.includes('GPS')}
                onChange={handleAcessorioChange}
                />
                GPS
            </label>
            <label>
                <input
                type="checkbox"
                name="acessorio"
                value="Velocímetro"
                checked={formData.acessorio.includes('Velocímetro')}
                onChange={handleAcessorioChange}
                />
                Velocímetro
            </label>
            <label>
                <input
                type="checkbox"
                name="acessorio"
                value="Ciclocomputador"
                checked={formData.acessorio.includes('Ciclocomputador')}
                onChange={handleAcessorioChange}
                />
                Ciclocomputador
            </label>
            </div>

            <div className='checkbox'>
            <label className='campo'>
            Escolha o seu plano:
            <select
                name="plano"
                value={formData.plano}
                onChange={handleChange}
            >
                <option value="">Selecione...</option>
                <option value="Pedal essencial">Pedal essencial</option>
                <option value="Pedal leve">Pedal leve</option>
                <option value="Pedal elite">Pedal elite</option>
            </select>
            </label>    
            </div>
            <div className='botoes'>
            <button>
                <a href="/EnviarFotos">Enviar fotos</a>
            </button>
            <button type="submit">
              <a href="/PagClie">Enviar Depois</a>
            </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default FormulariosBike;