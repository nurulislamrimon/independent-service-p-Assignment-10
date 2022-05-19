import { useLocation, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <div className="spinner-container">
            <div class="spinner-border" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    return children;
};

export default RequireAuth;