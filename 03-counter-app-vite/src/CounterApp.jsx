import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );

    const subOne = () => {
        setCounter( (newVal) => parseInt(counter) - 1  );
    }
    const reset = () => {
        setCounter( (newVal) => value  );
    }
    const addOne = () => {
        setCounter( (newVal) => parseInt(counter) + 1  );
    }
    
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ subOne }>
            -
        </button>
        <button onClick={ reset }>
            0
        </button>
        <button onClick={ addOne }>
            +
        </button>
        </>
    );
}

CounterApp.propTypes = {
    'value': PropTypes.number
};

CounterApp.defaultProps = {
    'value': 0 
};