import { internal_resolveProps } from '@mui/utils';
import { render, screen } from '@testing-library/react';
import Organiser from './Organiser';

describe('<Organiser/> component', () =>{

    describe('<Organiser/> as a whole', ()=>{
        it("renders component in the DOM", () =>{
            render(<Organiser/>);
            const nodeElement = screen.getByTestId(/organiser/i);
            expect(nodeElement).toBeInTheDocument();
        })
    })

    describe('<Organiser/> component state', ()=>{
        it("has organisers[] and setOrganisers[] in the useState", () =>{
            render(<Organiser/>);
            const nodeElement = screen.getByTestId(/organiser/i);
            expect(nodeElement.organisers).toBe([]);
        })
    })

})

