import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RouterConst } from './const';
import Main from './pages/Main';

const AppWithRouter = () => {
    const PAGE = {
        [RouterConst.DESCRIPTION.main.pageName]: Main,
    };

    return (
        <Routes>
            {Object.keys(RouterConst.DESCRIPTION).map((key) => {
                const elem = RouterConst.DESCRIPTION[key as keyof typeof RouterConst.DESCRIPTION];
                const PageComponent = PAGE[elem.pageName as keyof typeof PAGE];

                return (
                    <Route
                        key={elem.pageName}
                        path={elem.path}
                        element={<PageComponent/>}
                    />
                );
            })}
        </Routes>
    );
};

function App() {
    return (
        <Router>
            <AppWithRouter/>
        </Router>
    );
}

export default App;
