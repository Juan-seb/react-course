import React, { useState, useEffect } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp'
import Loader from './Loader';
import Error404 from './pages/Error404';
import SongPage from './pages/SongPage';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongTable from './SongTable';


let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || []

const SongSearch = () => {

    const [search, setSearch] = useState(null); /*Datos del autor y cancion del form */
    const [lyric, setLyric] = useState(null); /*Aqui guardamos la cancion */
    const [bio, setBio] = useState(null); /*Aqui guardamos los datos del autor */
    const [loading, setLoading] = useState(false); /*Barra de loading */
    const [mySongs, setMySongs] = useState(mySongsInit)

    useEffect(() => {

        if (search === null) return;

        const fetchData = async () => {
            const { artist, song } = search; // Destructuramos la info que obtenemos del form

            // Endpoints de las API´S
            let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            // Que aparezca el loading mientras se obtiene la data
            setLoading(true);

            /*Este proceso es parecido a hacer las peticiones con async y fetch pero para peticiones multiples y que
            esperen hasta que las dos se resulvan */
            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistURL),
                helpHttp().get(songURL)
            ])

            setBio(artistRes)
            setLyric(songRes)
            setLoading(false);


        }

        fetchData();

    }, [search])

    useEffect(() => {
        localStorage.setItem('mySongs', JSON.stringify(mySongs))
        console.log("Guardando")
    }, [mySongs])

    /*Second form to update the localStorage with useEffect */
    const handleSearch = (data) => { /*Este metodo se lo pasamo como prop al form */
        setSearch(data)
    }

    const handleSaveSong = () => {
        alert("Salvando cancion en favoritos");
        let currentSong = {
            search,
            lyric,
            bio
        }

        //let songs = [...mySongs, currentSong];
        setMySongs(() => [...mySongs, currentSong]);
        setSearch(null);
        //localStorage.setItem('mySongs', JSON.stringify(songs))
        /*Forma 1 de actualizar el localStorage cada que se guarda una cancion */
    }

    const handleDeleteSong = (id) => {
        //alert(`Eliminando cancion con el id:${id}`);
        let isDelete = window.confirm(`Estas seguro que quieres eliminar la cancion con el id ${id}`);

        if (isDelete) {
            let songs = mySongs.filter((el,index) => index !== id);
            setMySongs(songs)
            localStorage.setItem('mySongs',JSON.stringify(songs))
        }
    }

    return (
        <div>
            <HashRouter basename="canciones">
                <header>
                    <h2>Song Search</h2>
                    <Link to="/">Home</Link>
                    {/* <Link to="/"></Link> */}
                </header>
                {loading && <Loader />}
                <article className="grid-1-2">
                    <Switch>
                        <Route exact path="/">
                            <SongForm
                                handleSearch={handleSearch}
                                handleSaveSong={handleSaveSong}
                            />
                            <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                            {search && !loading &&  /*Si search tiene datos, y si loading es false ( el ! lo convierte en true) 
                            se renderiza songDetails*/
                                <SongDetails lyric={lyric} bio={bio} search={search} />
                            }
                        </Route>
                        <Route exact path="/:id" children ={<SongPage mySongs={mySongs} />} />
                        <Route path="*" component={Error404} />
                    </Switch>
                </article>
            </HashRouter>
        </div>
    )
}

export default SongSearch
