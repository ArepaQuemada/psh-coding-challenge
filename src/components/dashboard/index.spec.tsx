import { fireEvent, screen } from "@testing-library/react";
import Dashboard from "./index";
import renderWithContext from "../../test-utilities/renderWithContext";
import { Context } from "../../context/context";
import { Character } from "../../models";

const list: Character[] = [
    {
        __id: '',
        __v: '',
        fullname: 'Juan Bermudez',
        firstname: 'Juan',
        lastname: 'Bermudez'
    },
    {
        __id: '',
        __v: '',
        firstname: 'Ana',
        lastname: 'Perez',
        fullname: 'Ana Perez'
    }
]

const customContext: Context = {
    list,
    filterList: [],
    type: 'character',
}

describe('Dashboard component', () => {
    test('Mount component', () => {
        renderWithContext(
            <Dashboard />
        )
        expect(screen.getByRole('heading')).toBeTruthy()
    })

    test('Filter radio button', () => {
        const spyFilter = jest.fn()
        renderWithContext(
            <Dashboard />,
            customContext,
            spyFilter
        )
        const [ radioName ] = screen.getAllByRole('radio')
        fireEvent.click(radioName)
        expect(spyFilter).toHaveBeenCalledTimes(1)

        const input = screen.getByRole('textbox')
        fireEvent.change(input, {target: {value: 'Ana'}})
        expect(spyFilter).toHaveBeenCalledTimes(2)
    })
})