const Header = ({ theme, handleTheme, texts, handleLanguages, auth, handleAuth }) => {
    return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>
            <select name="language" onChange={handleLanguages} >
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
            <input
                type="radio"
                name="theme"
                id="light"
                value='light'
                onClick={handleTheme}
            />
            <label htmlFor="light">{texts.headerLight}</label>
            <input
                type="radio"
                name="theme"
                id="dark"
                value='dark'
                onClick={handleTheme}
            />
            <label htmlFor="dark">{texts.headerDark}</label>
            <button onClick={handleAuth}>{auth ? texts.buttonLogout:texts.buttonLogin}</button>
            {/* <button>{texts.buttonLogout}</button> */}
        </header>
    )
}

export default Header
