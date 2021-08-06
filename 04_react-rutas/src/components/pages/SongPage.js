import {useParams} from 'react-router-dom'
import SongDetails from "../SongDetails"

const SongPage = ({mySongs}) => {

    let {id} = useParams();
    //console.log(id,mySongs,mySongs[id]);

    let currentSong = mySongs[id];
    let {lyric,bio,search} = currentSong;
    return (
        <SongDetails lyric={lyric} bio={bio} search={search} />
    )
    /* return <h3>Pagina de cacnciones</h3> */
}

export default SongPage
