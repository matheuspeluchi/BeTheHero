import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi'




export default function Register(){
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entra na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

					<Link to="/register" className="black-link">
						<FiArrowLeft size={16} color="#e02041" />
						Não tenho cadastro
					</Link>
				</section>
				<form >
					<input placeholder="Nome da Ong"/>
					<input placeholder="E-mail" type="email"/>
					<input placeholder="Whatsapp"/>
					<div className="input-group">
						<input placeholder="Cidade"/>
						<input placeholder="UF" style={{width: 80}}/>
					</div>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}