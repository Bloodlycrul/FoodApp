import { render, screen } from "@testing-library/react"
import Contact from "../../Pages/Contact"
import '@testing-library/jest-dom';

test('Should Render the contact us page', () => { 
   render(<Contact />);

   const heading = screen.getByRole('heading')

   expect(heading).toBeInTheDocument(); 
 });

 test('Should button render on the screen' , ()=>{
    render(<Contact />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
 })
