import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIncident() {
	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					<h1>Cadastro novo Caso</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

					<Link to="/profile" className="black-link">
						<FiArrowLeft size={16} color="#e02041" />
						Voltar para Home
					</Link>
				</section>
				<form >
					<input placeholder="Titulo do Caso"/>
					<textarea placeholder="Descrição"></textarea>
					<input placeholder="Valor em reais"/>
					
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}
