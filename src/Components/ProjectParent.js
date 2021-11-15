import React from 'react'
import Projects from './Project';
import proj1 from '../images/proj1.jpg';
import proj2 from '../images/proj2.jpg';
import proj3 from '../images/proj3.jpg';
import proj4 from '../images/proj4.jpg';

const projects = [
{
    id: 1,
    src: proj1,
    name: 'Project 1',
},
{
    id: 2,
    src: proj2,
    name: 'Project 2',
},
{
    id: 3,
    src: proj3,
    name: 'Project 3',
},
{
    id: 4,
    src: proj4,
    name: 'Project 4',
}
]

function ProjectParent() {
    return (
        <>
        <Projects projects = {projects}/>
        </>
    )
}

export default ProjectParent
