import './app.css';
// import { PropsExample } from './lessons/01-props';
// import { ChangeCounter } from './lessons/05-props-state-callback';
// import { AppContainer } from './lessons/08-statefull-stateless'
import { Task } from './task/task.jsx';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Task />
            </header>
        </div>
    );
};
