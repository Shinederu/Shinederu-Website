const Replay = () => {

    /*useEffect(() => {
        fetchVideo();
    })

    const fetchVideo = async () => {

        const responseYouTube = await sendRequest(
            1,
            'https://www.googleapis.com/youtube/v3/search key=' + youTubeApiKey + '&channelId=' + youTubeChannelID + '&part=snippet,id&order=date&maxResults=19',
            'GET',
            null,
        );
        if (responseYouTube.status === 'SUCCESS') {

        } else {

        }



    }*/

    return (
        <>
            <h1>VODs et Clips</h1>
            <p>Retrouve ici les dernières rediffusions postée sur YouTube, ainsi que les clips twitch créer par la communauté
                !</p>
            <h2>Dernières rediffusions YouTube</h2>
            <div id="liste-videos">
            </div>
            <h2>Clips Twitch populaires</h2>
            <div id="liste-clips">
            </div>
        </>
    );
};


export default Replay;