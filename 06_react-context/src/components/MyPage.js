import React, { useState } from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth = null;

const translations = {
    es:{
        headerTitle:'Mi aplicacion SIN contexts API',
        headerSubtitle:'Mi cabecera',
        headerLight:'Claro',
        headerDark:'Oscuro',
        buttonLogin:'Iniciar sesión',
        buttonLogout:'Cerrar sesión',
        mainWelcome:'Bienvenid@ invitad@',
        mainHello:'Hola usuari@',
        mainContent:'Mi contenido principal',
        footerTitle:'Mi pié de página'
    },
    en:{
        headerTitle:'My application without contexts API',
        headerSubtitle:'My header',
        headerLight:'Light',
        headerDark:'Dark',
        buttonLogin:'Log in',
        buttonLogout:'Log out',
        mainWelcome:'Welcome Guest',
        mainHello:'Hello user',
        mainContent:'My main content',
        footerTitle:'My footer'
    }
}

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme) /*Guarda el tema de la pagina */
    const [language, setLanguage] = useState(initialLanguage) /*Save the language of the page */
    const [texts, setTexts] = useState(translations[language]) /*Se guardan los textos */
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {
        if (e.target.value === 'light') {
            setTheme('light')
        }else{
            setTheme('dark')
        }
        // setTheme(e.target.value) another way to update the state
        
    }; /*Change value of the state that controls the theme */

    const handleLanguages = (e) => {
        if (e.target.value === 'es') {
            setLanguage('es')
            setTexts(translations.es)
        }else{
            setLanguage('en')
            setTexts(translations.en)
        }
    }/*Change page language */

    const handleAuth = (e) => {
        if (auth) {
            setAuth(null)
        }else{
            setAuth(true)
        }
    }/*authentication control (simulation) */

    return (
        <div className="my-page">
            <Header 
                theme={theme}
                texts={texts} 
                auth={auth}
                handleTheme={handleTheme} 
                handleLanguages={handleLanguages}
                handleAuth={handleAuth}
            />
            <Main 
                auth={auth}
                theme={theme} 
                texts={texts}
            />
            <Footer 
                theme={theme} 
                texts={texts}
            />
        </div>
    )
}

export default MyPage
