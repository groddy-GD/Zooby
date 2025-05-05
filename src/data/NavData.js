import { CartIcon, CompanyLogo, Hamburger } from "../icons/index.jsx";

export const NavData = {
    "logo": <CompanyLogo />,
    "buttons": [
        {
            "href": "/login",
            "label": "Login"
        },
        {
            "href": "/register",
            "label": "Register"
        },
    ],
    "cart": {
        "href": "/cart",
        "icon": <CartIcon />
    },
    "hamburger": {
        "href": "/hamburger",
        "icon": <Hamburger />
    }
}