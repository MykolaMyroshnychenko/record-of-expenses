import './Card.css';

const Card = (props) => {

    const classes = 'card ' + props.className; /* указываем классы которые хотим применять */
    return <div className={classes}>{props.children}</div>
}

export default Card;