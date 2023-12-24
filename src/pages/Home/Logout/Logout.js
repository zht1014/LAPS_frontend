import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const performLogout = async (navigate) => {
    try {

        await axios.post('http://localhost:8080/api/logout');

        navigate('/login');
    } catch (error) {
        console.error('Logout failed:', error);

        navigate('/login');
    }
};


const Logout = () => {
    const navigate = useNavigate();


    performLogout(navigate);

    return <div>Logging out...</div>;
};

export default Logout;
