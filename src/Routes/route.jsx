import { Route, Routes } from "react-router-dom"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={nomePagina}/>
        </Routes>
    )
}

// criar pasta page no src, pasta homepage