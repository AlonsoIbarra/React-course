import { memo } from 'react'

export const  Small = memo(
    ( {counter} ) => {
        console.log(counter);
        return (
            <>
                <div>{counter}</div>
            </>
        )
    
})