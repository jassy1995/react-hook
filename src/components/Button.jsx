import PropTypes from 'prop-types';

function Button({ children, handler, disable, isAllow }) {
    return (
        <button disabled={disable && !isAllow} className='border border-slate-300 rounded-sm w-32 h-20 px-2 py-1 bg-slate-100 font-semibold text-2xl text-black disabled:opacity-75 disabled:cursor-not-allowed' onClick={handler}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    handler: PropTypes.func,
    disable: PropTypes.bool,
    isAllow: PropTypes.bool,
};

Button.defaultProps = {
    children: 'button',
    disable: false,

};

export default Button