import { useHttpClient } from "@/shared/hooks/http-hook";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface YouTubeVideo {
  id: {
    videoId: string;
  };
}

const YouTubeVideos = () => {
  const { sendRequest, isLoading, errors } = useHttpClient();
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const nbMedia = 8;

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const youtubePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - nbMedia);
    }
  };

  const youtubeNext = () => {
    if (startIndex + nbMedia < videos.length) {
      setStartIndex((prevIndex) => prevIndex + nbMedia);
    }
  };

  const getYoutubeVideos = async () => {
    const youTubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const youTubeChannelID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

    const url = `https://www.googleapis.com/youtube/v3/search?key=${youTubeApiKey}&channelId=${youTubeChannelID}&part=snippet,id&order=date&maxResults=8`;

    sendRequest({
      key: 1,
      url,
      method: "GET",
      onSuccess: (data) => {
        setVideos(data.items);
      },
      onError: (error) => {
        console.error("Erreur lors de la récupération des vidéos :", error);
      },
    });
  };

  return (
    <div className="text-center">
      {isLoading[1] && <p className="text-sm text-gray-300">Chargement des vidéos...</p>}

      {errors[1] && <p className="text-sm text-red-500">Erreur : {errors[1]}</p>}

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={youtubePrev}
          disabled={startIndex === 0}
          className="text-white hover:text-blue-500"
          aria-label="Vidéos précédentes"
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4">
          {videos.slice(startIndex, startIndex + nbMedia).map((video, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
                title={`YouTube Video ${index}`}
                className="w-full h-40 rounded-md"
              ></iframe>
            </div>
          ))}
        </div>

        <button
          onClick={youtubeNext}
          disabled={startIndex + nbMedia >= videos.length}
          className="text-white hover:text-blue-500"
          aria-label="Vidéos suivantes"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default YouTubeVideos;
