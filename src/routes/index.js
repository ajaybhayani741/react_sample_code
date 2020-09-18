import React, { lazy } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import { isLoggedIn } from "../utils/authentication"
import NotFound from "../components/NotFound"
import Home from "../containers/Home"


// const Home = lazy(() => import("../containers/Home"))
const About = lazy(() => import("../containers/About"))
const Faq = lazy(() => import("../containers/Faq"))
const SearchResults = lazy(() => import("../containers/SearchResults"))
const Industries = lazy(() => import("../containers/Industries"))
const Repeaters = lazy(() => import("../containers/Repeaters"))
const Location = lazy(() => import("../containers/Location"))
const ShoppingCart = lazy(() => import("../containers/ShoppingCart"))
const Confirmation = lazy(() => import("../containers/Confirmation"))
const CheckoutContainer = lazy(() => import("../containers/CheckoutContainer"))
const Accounts = lazy(() => import("../containers/Accounts"))
const SignIn = lazy(() => import("../containers/SignIn"))
const SignUp = lazy(() => import("../containers/SignUp"))

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/faq",
        component: Faq,
    },
    {
        path: "/search-results",
        component: SearchResults,
        // isLogin: true,
        // redirectUrl: '/sign-in'
    },
    {
        path: "/industry/:id?",
        component: Industries,
    },
    {
        path: "/repeaters/:id?",
        component: Repeaters,
    },
    {
        path: "/location/:id?",
        component: Location,
    },
    {
        path: "/cart",
        component: ShoppingCart,
    },
    {
        path: "/checkout",
        component: CheckoutContainer,
    },
    {
        path: "/confirmation",
        component: Confirmation,
    },
    {
        path: "/user-profile",
        component: Accounts,
        isLogin: true,
        redirectUrl: '/sign-in'
    },
    {
        path: "/sign-in",
        component: SignIn,
        isAuth: true,
        redirectUrl: '/'
    },
    {
        path: "/sign-up",
        isAuth: true,
        component: SignUp,
        redirectUrl: '/'
    },
    {
        path: "*",
        component: NotFound,
    }
]

const SelectComponent = (Component, props, redirectUrl, isAuth, isLogin) => {
    const FinalComponent = <Component {...props} />
    const FinalRedirectUrl = <Redirect to={{ pathname: redirectUrl }} />
    if (isAuth) return isLoggedIn() ? FinalRedirectUrl : FinalComponent
    if (isLogin) return isLoggedIn() ? FinalComponent : FinalRedirectUrl
    return FinalComponent
}

const Routing = () => {
    return (
        <Switch>
            {
                routes.map(({ component: Component, redirectUrl, isLogin, isAuth, ...routes }, index) => (
                    <Route
                        key={index}
                        {...routes}
                        render={props => SelectComponent(Component, props, redirectUrl, isAuth, isLogin)} />
                ))
            }
        </Switch>
    )
}


export default Routing