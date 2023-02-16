import PropTypes from 'prop-types';

const Button = (props) => {
    const { type, onClick, text } = props;
    if (type === 'outline')
        return <button onClick={onClick}
            className='bg-white border-2 border-orange-500 px-5 py-2 text-orange-500 font-semibold rounded focus:ring-2 ring-orange-400 text-base'
        >
            {text}
        </button>
    return <button
        className='bg-orange-500 px-5 py-2 text-white font-semibold rounded focus:ring-2 ring-orange-600 text-base'
        onClick={onClick}
    >
        {text}
    </button>
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;