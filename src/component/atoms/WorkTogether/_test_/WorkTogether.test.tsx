import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

it('should have work-together test id', () => {
     render(<HomePage />) // ARRANGE 

    const myElem = screen.getByTestId('work-together') // ACT 

    expect(myElem).toBeInTheDocument() // ASSERT
})
