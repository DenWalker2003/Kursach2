import Admin from "./pages/Admin"
import Favorites from "./pages/Favorites";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, AUTO_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Auth from "./pages/Auth";
import AutoPage from "./pages/AutoPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin 
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth 
    },
    {
        path: AUTO_ROUTE + '/:id',
        Component: AutoPage
    },
]