import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import Results from '../components/Results';
import Auth from '../utils/auth';

const logout = (event) => {
	event.preventDefault();
	Auth.logout();
	window.location.assign('/LoginPage');
};

function Profile() {
	return (
		<div className='quizHeaderAndQuestions'>
			<div className='quizHeader'>
				<Header />
			</div>
			<div className='quizComponent'>
				<Results />
			</div>
		</div>
	);
}

export default Profile;
