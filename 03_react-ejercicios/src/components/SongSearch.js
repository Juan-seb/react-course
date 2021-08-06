import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp'
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {

    const [search, setSearch] = useState(null); /*Datos del autor y cancion del form */
    const [lyric, setLyric] = useState(null); /*Aqui guardamos la cancion */
    const [bio, setBio] = useState(null); /*Aqui guardamos los datos del autor */
    const [loading, setLoading] = useState(false); /*Barra de loading */

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

    const handleSearch = (data) => { /*Este metodo se lo pasamo como prop al form */
        setSearch(data)
    }

    return (
        <div>
            <h2>Song Search</h2>
            <article className="grid-1-3">
                <SongForm handleSearch={handleSearch} />
                {loading && <Loader />}
                {search && !loading &&  /*Si search tiene datos, y si loading es false ( el ! lo convierte en true) 
                se renderiza songDetails*/
                    <SongDetails lyric={lyric} bio={bio} search={search} />
                }
            </article>

        </div>
    )
}

export default SongSearch
