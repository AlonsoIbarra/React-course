import PropTypes from 'prop-types';

export const FirstApp = ( { title, subtitle } ) => {
    console.log(title);

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>sdf</p>
        </>
    )
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
FirstApp.defaultProps = {
    title: 'Titulo',
    subtitle: 'subtitulo',
}