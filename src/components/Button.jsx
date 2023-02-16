import PropTypes from 'prop-types';

const Button = (props) => {
    const { type, onClick, text } = props;
    if (type === 'outline')
        return <button onClick={onClick}
            className='bg-white border-2 border-green-600 px-5 py-2 text-green-600 font-semibold rounded focus:ring-2 ring-green-700 text-base'
        >
            {text}
        </button>
    return <button
        className='bg-green-600 px-5 py-2 text-white font-semibold rounded focus:ring-2 ring-green-700 text-base'
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