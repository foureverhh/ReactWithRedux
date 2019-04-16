import React, { PropTypes } from 'react';

class CoursePage extends React.Component {

    constructor(props, context){
        super(props,context);
        this.state={
            course: {
                title: ""
            },
            courses: []
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ 
            course: course
        });
    }
    
    onClickSave(){
        alert(`Saving ${this.state.course.title}`);
        //const { courses } = this.state;
        /*
        this.setState({
            courses: this.state.courses.push(this.state.course.title),
            course: {
                title: ""
            }
        });
        */
       this.setState(prevState => {
           courses: prevState.courses.push(this.state.course.title)
       });

       this.setState({
           course: {
                title: ''
            }
        });
    }

    componentDidUpdate(){
        console.log(this.state.courses.length);
        console.log(this.state.courses); 
    }  

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursePage;