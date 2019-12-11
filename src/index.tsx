import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddPage from './pages/AddPage';
import FormHabitDiary from './pages/FormHabitDiary';
import NotFound from './pages/NotFound';
import './index.scss';

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={AddPage} />
            <Route path="/form-habit" component={FormHabitDiary} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
