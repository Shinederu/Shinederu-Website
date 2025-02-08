const InfoCards = () => {

    return (
        <>
            <div className="pb-8 mb-6 w-11/12 inline-block border-b-2 border-[#6a11cb]">
                <div className="grid grid-cols-2 gap-8">
                    {/* Bloc 1 : Les Directs */}
                    <div className="flex flex-col items-start bg-[#10101f] p-6 rounded-xl border-2  border-[#6a11cb]">
                        <div>
                            <h2 className="text-xl font-bold mb-2 border-b-2 border-[#6a11cb] pb-1">
                                Les Directs
                            </h2>
                            <p className="text-[#f0f0f0] leading-relaxed">
                                Il arrive de temps en temps que je lance des streams sur Twitch. Je n'ai aucun planning et ça n'est clairement
                                pas mon activité principale. Mais j'aime bien en faire un de temps en temps pour m'amuser. Si tu veux en être
                                informé, active les notifications Twitch ou rejoins mon Discord !
                            </p>
                        </div>
                        <div className="flex justify-center w-full">
                            <a
                                href={import.meta.env.VITE_TWITCH_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                            >
                                Rejoindre Twitch
                            </a>
                        </div>
                    </div>

                    {/* Bloc 2 : Les Rediffusions */}
                    <div className="flex flex-col items-start bg-[#10101f] p-6 rounded-xl border-2  border-[#cb1111]">
                        <div>
                            <h2 className="text-xl font-bold mb-2 border-b-2 border-[#cb1111] pb-1">
                                Les Rediffusions
                            </h2>
                            <p className="text-[#f0f0f0] leading-relaxed">
                                Si t'aimes bien mes lives, j'ai une bonne nouvelle pour toi ! L'intégralité des streams que j'ai réalisés sont
                                disponibles sur YouTube ! Te laissant ainsi l'opportunité d'en profiter un nombre incalculable de fois et même
                                de laisser ton avis en commentaire.
                            </p>
                        </div>
                        <div className="flex justify-center w-full">
                            <a
                                href={import.meta.env.VITE_YOUTUBE_CHANNEL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 mt-4 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                            >
                                Voir les rediffusions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoCards;
