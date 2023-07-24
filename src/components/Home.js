import Notes from './Notes';
import { useHistory } from 'react-router-dom';

export const Home = () => {
    let history = useHistory();
    if(!localStorage.getItem('token')){
        history.push("./login");
    }
    return (
        <div> 
            <Notes/>
        </div>
    )
}
