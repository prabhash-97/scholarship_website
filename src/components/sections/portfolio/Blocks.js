import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/project/05.jpg';
import img2 from '../../../assets/img/project/03.jpg';
import img3 from '../../../assets/img/project/14.jpg';
import img4 from '../../../assets/img/project/02.jpg';
import img5 from '../../../assets/img/project/10.jpg';
import img6 from '../../../assets/img/project/11.jpg';
import img7 from '../../../assets/img/project/01.jpg';
import img8 from '../../../assets/img/project/12.jpg';
import img9 from '../../../assets/img/project/13.jpg';

const filtersbtn = [
    { name: "All", value: "All", isActive: true },
    { name: "01", value: "01", isActive: false },
    { name: "02", value: "02", isActive: false },
    { name: "03", value: "03", isActive: false },
    { name: "04", value: "04", isActive: false },
    { name: "05", value: "05", isActive: false },
    { name: "06", value: "06", isActive: false },
];

class Blocks extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                photo: img1,
                origin: ["01"],
                title:'Free Consulting',
                text:'Join us for consultatoins,Join us for consultatoins,Join us for consultatoins',
            },
            {
                photo: img2,
                origin: ["02"],
                title:'How To Business',
                text:'Join us for consultatoins',
            },
            {
                photo: img3,
                origin: ["03"],
                title:'Design Strategy',
                text:'Join us for consultatoins',
            },
            {
                photo: img4,
                origin: ["04"],
                title:'Research Strategy',
                text:'Join us for consultatoins',
            },
            {
                photo: img5,
                origin: ["05"],
                title:'IT Consultations',
                text:'Join us for consultatoins',
            },
            {
                photo: img6,
                origin: ["06"],
                title:'Business Monitor',
                text:'Join us for consultatoins',
            },
            {
                photo: img7,
                origin: ["01"],
                title:'Free Consulting',
                text:'Join us for consultatoins',
            },
            {
                photo: img8,
                origin: ["02"],
                title:'Business Monitor',
                text:'Join us for consultatoins',
            },
            {
                photo: img9,
                origin: ["03"],
                title:'IT Consultations',
                text:'Join us for consultatoins',
            },
            ],
            filterProject: []
        };
    }

    componentDidMount() {
        this.setState({
            filterProject: this.state.projects
        });
    }
    handleClick = name => {
        let filterProject = [];
        if (name === "All") {
            filterProject = this.state.projects;

        } else {
            filterProject = this.state.projects.filter(
                (project, i) => project.origin.includes(name)
            );
        }
        var index = filtersbtn.map(function(e) { return e.name; }).indexOf(name);
        if(index){
            filtersbtn.forEach( item => {
                item.isActive = false;
            });
            filtersbtn[index].isActive = true;
        }
        this.setState({ filterProject });
    };
    render() {
        const renderAll = this.state.filterProject.map((project, i) => (
            <div key={i} className="isotope-item col-lg-4 col-sm-6">
                <div className="project-box hover-style">
                    <div className="project-thumb">
                        <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + project.photo + ")" }} />
                    </div>
                    <div className="project-desc text-center">
                        <h4><Link>{project.title}</Link></h4>
                        <p>{project.text}</p>

                    </div>
                </div>
            </div>
        ));
        return (
            <section className="project-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <ul className="project-nav project-isotope-filter">
                                {filtersbtn.map(({ name, value, isActive }) => (
                                    <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={this.handleClick.bind(this, name)}>{name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Project Boxes */}
                    <div className="row project-boxes project-isotope mt-60">
                        {renderAll}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blocks;