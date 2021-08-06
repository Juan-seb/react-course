import { createContext, useState} from "react";

const LanguageContext = createContext();
const initialLanguage = 'es';

const translations = {
    es: {
        headerTitle: 'Mi aplicacion CON contexts API',
        headerSubtitle: 'Mi cabecera',
        headerLight: 'Claro',
        headerDark: 'Oscuro',
        buttonLogin: 'Iniciar sesión',
        buttonLogout: 'Cerrar sesión',
        mainWelcome: 'Bienvenid@ invitad@',
        mainHello: 'Hola usuari@',
        mainContent: 'Mi contenido principal',
        footerTitle: 'Mi pié de página'
    },
    en: {
        headerTitle: 'My application WITH contexts API',
        headerSubtitle: 'My header',
        headerLight: 'Light',
        headerDark: 'Dark',
        buttonLogin: 'Log in',
        buttonLogout: 'Log out',
        mainWelcome: 'Welcome Guest',
        mainHello: 'Hello user',
        mainContent: 'My main content',
        footerTitle: 'My footer'
    }
}

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage) /*Save the language of the page */
    const [texts, setTexts] = useState(translations[language]) /*Save texts */

    const handleLanguages = (e) => {
        if (e.target.value === 'es') {
            setLanguage('es')
            setTexts(translations.es)
        } else {
            setLanguage('en')
            setTexts(translations.en)
        }
    }/*Change page language */

    const data = { texts, handleLanguages }

    return (
        <LanguageContext.Provider value={data} >{children}</LanguageContext.Provider>
    )
}

export { LanguageProvider }
export default LanguageContext