import { Context } from "../context/context";
import { render } from "@testing-library/react";
import CommonContextProvider from "../context/context";
import { Character, Crew } from "../models";
import { MemoryRouter } from "react-router-dom";

type SpyFN = (List: Character[] | Crew[]) => void

const renderWithContext = (Component: JSX.Element, customContext?: Context, spyOnupdateFilterList?: SpyFN) => {
    return render(
        <CommonContextProvider customContext={customContext} spyOnupdateFilterList={spyOnupdateFilterList}>
            <MemoryRouter>
                {Component}
            </MemoryRouter>
        </CommonContextProvider>
    )
}

export default renderWithContext