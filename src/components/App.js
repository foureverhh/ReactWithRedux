import React, {PropTypes} from 'react';
import Header from '../common/Header';

class App extends React.Component {
    render(){
        return (
            <div className="container-filuid">
                <Header />
                {this.props.children || "Welcome to Home page"}
            </div>
        );
    }
}

App.propTypes ={
    children: PropTypes.object.isRequired
};

export default App;