import Title from "../decoration/Title";

type ActusProps = {
    title: string;
    message: string;
    btnLabel: string;
    link: string;
    date: string;
}

const ActusCards = (props: ActusProps) => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto_auto] bg-[#10101f] pt-4 pb-4 pr-8 pl-8 rounded-xl border-2 border-[#ececec] h-[26rem]">
            {/* Titre centré */}
            <Title title={props.title} size={3} />

            {/* Message qui prend tout l’espace disponible */}
            <p className="text-white text-left overflow-auto">
                {props.message}
            </p>

            {/* Bouton centré en bas */}
            {props.link && props.btnLabel ? (
                <div className="flex justify-center self-end pb-6">
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] py-3 px-5 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                    >
                        {props.btnLabel}
                    </a>
                </div>
            ) : (
                <div className="self-end pb-6"></div> // Maintien l’espace si pas de bouton
            )}

            {/* Date en bas à droite */}
            <p className="text-sm text-gray-400 text-right">
                Publié le {props.date}
            </p>
        </div>
    );
}

export default ActusCards;
