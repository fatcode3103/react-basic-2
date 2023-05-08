import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes/routes';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

function App() {
    //re-render
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Page = route.component;
                            let Layout = DefaultLayout;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
