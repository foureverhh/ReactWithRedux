import React, {PropTypes} from 'react';

class App extends React.Component {
    render(){
        return (
            <div className="container-filuid">
                <p>Header here...</p>
                {this.props.children || "Welcome to Home page"}
            </div>
        );
    }
}

App.propTypes ={
    children: PropTypes.object.isRequired
};

export default App;