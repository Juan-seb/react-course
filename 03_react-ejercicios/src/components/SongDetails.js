import React from 'react'
import SongArtists from './SongArtists'
import SongLyric from './SongLyric'
import Message from './Message'

const SongDetails = ({ lyric, bio, search }) => {

    if (!lyric || !bio) return null; /*Si alguna de estas dos props no tienen valor entonces evita renderizados innecesarios */

    return (
        <>
            {lyric.err || lyric.name === "AbortError" ?
                <Message
                    msg={`Error: No existe la cancion "<em>${search.song}</em>"`} /*Por esta razon llamamos search */
                    bgColor="#dc3545"
                /> :
                <SongLyric title={search.song} lyrics={lyric.lyrics} />}
            {bio.artists ?
                <SongArtists artist={bio.artists[0]} /> :
                <Message
                    msg={`Error: No existe el autor "<em>${search.artist}</em>"`} se
                    bgColor="#dc3545"
                />
            }
        </>
    )

}

export default SongDetails
