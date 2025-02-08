import Title from "@/components/decoration/Title"

const Community = () => {
    return (
        <>

            <section className="border-b-4 border-[#6b6b6b] pb-6 mb-8 w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-6/12">
                    {/* Embed Discord */}
                    <div className="flex justify-center">
                        <iframe
                            src="https://discord.com/widget?id=539000723023724545&theme=dark"
                            width="300"
                            height="500"
                            className="rounded-xl border-2 border-[#6a11cb]"
                            title="Discord Widget"
                        ></iframe>
                    </div>


                    <div className="bg-[#10101f] p-6 rounded-xl border-2 border-[#6a11cb] text-white">
                        <Title size={2} title="Rejoins la Communauté" />
                        <p className="mb-4">
                            Rejoins une communauté fun et accueillante où tu pourras discuter de tout et de rien : jeux vidéo, tech, et même partager des memes !
                            Le serveur Discord est le meilleur endroit pour rester informé de mes lives, événements, et projets.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href={import.meta.env.VITE_DISCORD_INVITE}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                            >
                                Rejoindre le discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section Widgets ou contenu futur */}
            <section className=" flex flex-col items-center  ">
                <div className="w-10/12 bg-[#10101f] p-6 rounded-xl border-2  border-[#ffed46a6]">
                    <Title title="Et après ?" size={2} />
                    <p>
                        Cette page évoluera au fil du temps ! Je prévois d'ajouter de nouvelles fonctionnalités, comme un espace de discussion en direct ou d'autres moyens d'interagir avec la communauté. <br /> <br />
                        Ainsi vous retrouverez ici des petites informations sur les éléments qui vous seront disponible quand vous vous connecter !
                    </p>
                    <p className="mt-4 text-sm text-gray-400">
                        Pour l'instant, rejoins-nous sur Discord et n'hésite pas à partager tes idées pour améliorer cette page !
                    </p>
                </div>
            </section>

        </>
    );
};

export default Community;