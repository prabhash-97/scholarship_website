import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/project/01.jpg';
import img2 from '../../../assets/img/project/02.jpg';
import img3 from '../../../assets/img/project/03.jpg';
import img4 from '../../../assets/img/project/04.jpg';
import img5 from '../../../assets/img/project/05.jpg';
import img6 from '../../../assets/img/project/06.jpg';
import img7 from '../../../assets/img/project/07.jpg';
import img8 from '../../../assets/img/project/08.jpg';
import img9 from '../../../assets/img/project/09.jpg';

const filtersbtn = [
    { name: "All", value: "All", isActive: true },
    { name: "01", value: "01", isActive: false },
    { name: "02", value: "02", isActive: false },
    { name: "03", value: "03", isActive: false },
    { name: "04", value: "04", isActive: false },
    { name: "05", value: "05", isActive: false },
    { name: "06", value: "06", isActive: false },
    { name: "07", value: "07", isActive: false },
    { name: "08", value: "08", isActive: false },
    { name: "09", value: "09", isActive: false },
];

class Blocks extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                photo: img1,
                origin: ["01"],
            },
            {
                photo: img2,
                origin: ["02"],
            },
            {
                photo: img3,
                origin: ["03"],
            },
            {
                photo: img4,
                origin: ["04"],
            },
            {
                photo: img5,
                origin: ["05"],
            },
            {
                photo: img6,
                origin: ["06"]
            },
            {
                photo: img7,
                origin: ["07"],
            },
            {
                photo: img8,
                origin: ["08"]
            },
            {
                photo: img9,
                origin: ["09"]
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