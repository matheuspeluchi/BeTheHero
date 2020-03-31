import React from 'react';
import {Feather} from '@expo/vector-icons'
import styles from './styles';
import logoImg from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { View , Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';


export default function Detail(){
	const navigation = useNavigation();
	const message = 'Ola CCZ, estou entrando em contato, pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$120,00';
	function navigationBack(){
		navigation.goBack();
	}
	function sendMail(){
		MailComposer.composeAsync({
			subject: 'Héroi do Caso: Cadela Atropelada',
			recipients: ['matheuspeluchi@gmail.com'],
			body: message
		})
	}

	function sendWhatsapp(){
		Linking.openURL(`whatsapp://send?phone=5567998662294&text=${message}`)
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<TouchableOpacity onPress={navigationBack}>
					<Feather name="arrow-left" size={28} color='#e02041' />
				</TouchableOpacity>
			</View>

			<View style={styles.incident}>
				<Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
				<Text style={styles.incidentValue}>CCZ</Text>

				<Text style={styles.incidentProperty}>CASO:</Text>
				<Text style={styles.incidentValue}>Cadela Atropelada</Text>

				<Text style={styles.incidentProperty}>Valor:</Text>
				<Text style={styles.incidentValue}>R$ 120,00</Text>
			</View>

			<View style={styles.contactBox}>
				<Text style={styles.heroTitle}>Salve o dia!</Text>
				<Text style={styles.heroTitle}>Seja o Herói desse caso!</Text>

				<Text style={styles.heroDescription}>Entre em contato:</Text>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
						<Text style={styles.actionText}>WhasApp</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.action} onPress={sendMail}>
						<Text style={styles.actionText}>E-mail</Text>
					</TouchableOpacity>
				</View>

			</View>
		</View>
	)
}
