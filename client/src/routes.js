import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Main from './pages/Main';
import ChangeProfileInfo from './pages/ChangeProfileInfo';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, CHANGE_ROUTE} from './utils/consts';

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: CHANGE_ROUTE,
        Component: ChangeProfileInfo
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    
]