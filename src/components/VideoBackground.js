import React, {} from 'react'

import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
        <iframe  className=' w-screen aspect-video' src={"https://www.youtube.com/embed/73_1biulkYk?si=5IGRg8v6MhwF6VqD" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground

//"https://www.youtube.com/embed/XKM6LZGZVtI?si=RFHdwsnRxYeaz85q"
//https://www.youtube.com/embed/m2L-Sa_6MU0?si=EixarwMF4RsRPWTr

//"https://www.youtube.com/embed/LEjhY15eCx0?si=JD_zei_xbJet3Tty"