import { INF_Card } from "./types";

const Card = (props: INF_Card) => {
    return (
        <div className="[ card ]" data-card-variant={props.variant}>
            { props.title && 
                (
                    <p className="[ card__header ] [ text-center header-500 ]">
                        { props.title }
                    </p>
                ) 
            }
            
            <div className="[ card__content innertext-small flex-items flex-col ]">
            { props.children }
            </div>
        </div>
    )
}

export default Card;