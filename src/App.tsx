import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WelcomeScreen from './pages/welcome screen';
import SignInScreen from './pages/sign-in screen';
import SignUpScreen from './pages/sign-up screen';
import PasswordField from './components/Inputs/PasswordField';

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Nav />
                <PasswordField />
                <Switch>
                    <Route exact path="/welcome">
                        <WelcomeScreen />
                    </Route>
                    <Route exact path="/sign-in">
                        <SignInScreen />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUpScreen />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign-In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign-Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
