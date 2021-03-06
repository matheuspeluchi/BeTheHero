import React, {useState, useEffect} from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css'
import api from '../../services/api';

export default function Profile(){
	const ongId = localStorage.getItem('ongId');
	const ongName = localStorage.getItem('ongName');
	const [incidents, setIncidents] = useState([]);
	const history = useHistory();
	function handleDeleteIcident(id) {
		try {
			api.delete(`incidents/${id}`, {headers:{Authorization: ongId}});
			setIncidents(incidents.filter(incident => incident.id !== id));
		} catch (error) {
			alert('Erro ao deletar caso.')
		}
	}

	useEffect(()=>{
		console.log(ongId)
		api.get('profile',{headers:{ Authorization: ongId}})
			.then(response => {
				console.log(response.data)
				setIncidents(response.data)
			})
	},[ongId])


	function handleLogout(){
		localStorage.clear();
		history.push('/');
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be the Hero"/>
				<span>Bem vindo {ongName}</span>
				<Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
				<button type="button" onClick={handleLogout}>
					<FiPower size={18} color="#e02041" />
				</button>
			</header>

			<h1>Casos Cadastrados</h1>
		
			<ul>
				{incidents.map(incident =>(
					<li key={incident.id}>
						<strong>CASO:</strong>
						<p>{incident.title}</p>

						<strong>DESCRIÇÃO:</strong>
						<p>{incident.description}</p>

						<strong>Valor:</strong>
						<p>{Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>

						<button type="button" onClick={()=> handleDeleteIcident(incident.id)}>
							<FiTrash2 size={20} color="#a8a8b3" />
						</button>
					</li>
					)
				)}

			</ul>
		</div>
	)
}