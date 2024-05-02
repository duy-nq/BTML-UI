import { Navigate } from "react-router-dom";

export default function withAuth(Component) {
    return function ProtectedRoute() {
        const token = localStorage.getItem('token');
    
        if (!token) {
            return <Navigate to="/" />;
        }
    
        return <Component/>;
    };
}