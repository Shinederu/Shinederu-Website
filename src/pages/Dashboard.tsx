import MenuCards from "@/components/cards/MenuCards";

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-rows-2">
                <div className="flex gap-7">
                    <MenuCards active={true} name="Profile" desc="Vois et modifie ton profile !" url="/profile" picture="profile.gif" />
                    <MenuCards active={false} name="MelodyQuest" desc="Un blindtest amusant !" url="/MelodyQuest" picture="MelodyQuest.png" />
                    <MenuCards active={false} name="Ananas" desc="Le célèbre réseau social #FUN" url="/Ananas" picture="Ananas.png" />
                </div>
                <div className="flex items-center flex-col justify-center gap-6">
                    <h1 className="text-3xl font-bold text-center">Prochainement ici, encore plus de projets !</h1>
                    <p><i>Vous verrez, ça va bientôt se remplir !</i></p>


                </div>
            </div>
        </>
    );
}

export default Dashboard;
