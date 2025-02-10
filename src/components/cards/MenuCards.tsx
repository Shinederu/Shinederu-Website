import { Link } from "react-router-dom";
import Title from "../decoration/Title"

type MenuCardsType = {
    active: boolean;
    url: string;
    name: string;
    picture: string;
    desc: string;
}

const MenuCards = (props: MenuCardsType) => {

    return (
        <>
            {props.active ? (
                <Link to="/profile">
                    <div className="w-72 h-80 rounded-xl border-2 border-[#3eda30]"
                        style={{
                            backgroundImage: `url(/img/dashboard/${props.picture})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <div className="bg-black rounded-xl bg-opacity-65 bg-cover w-full h-full flex justify-center flex-col">
                            <Title size={3} title={props.name} />
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="w-72 h-80 rounded-xl border-2 border-[#da3030]"
                    style={{
                        backgroundImage: `url(/img/dashboard/${props.picture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="bg-black rounded-xl bg-opacity-65 bg-cover w-full h-full flex justify-center flex-col">
                        <Title size={3} title={props.name} />
                        <p>{props.desc}</p>
                        <i>Prochainement...</i>
                    </div>
                </div>
            )}

        </>
    )





}

export default MenuCards