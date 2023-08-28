import { render, screen} from '@testing-library/react';
import { GiftExperApp } from "../src/GiftExpertApp";

describe('Testing GiftExpertApp',()=>{
    test('Validar titulo del app',()=>{
        
        render( <GiftExperApp />);

        const title = screen.getByText('GiftExperApp');

        expect(title).toBeTruthy();

    });
});
