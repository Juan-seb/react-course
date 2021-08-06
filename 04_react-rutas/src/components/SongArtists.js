import React from 'react'

const SongArtists = ({artist}) => {
    
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist} />
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente" /*Si el artista no ha muerto eso me da null */}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Sitio web oficial</a>
            <p>{artist.strBiographyEN}</p>
        </section>
    )
}

export default SongArtists
