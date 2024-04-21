import React, { useState } from 'react';
import { FiGithub } from "react-icons/fi";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

export default function ProjectDetail({ item, toggleMainDetail, toggleCollabDetail }) {
    const [isDetailVisible, setIsDetailVisible] = useState(true);

    const handleClose = () => {
        setIsDetailVisible(false);
        if (toggleMainDetail) {
            toggleMainDetail();
        }
        if (toggleCollabDetail) {
            toggleCollabDetail();
        }
    };

    return (
        <>
            {isDetailVisible && (
                <>
                    <div id='project' className="wrapper">
                        <div className='detail-container'>
                            <div className="img-container">
                                <div className="img"><img src={item.img} alt="" /></div>
                                <button className="close-btn" onClick={handleClose}>X</button>
                            </div>
                            <div className="detail-items">
                                <h2 className='detail-title'>{item.name}</h2>
                                <div className='detail-icons'>
                                    <Link to={item.gitLink} target='_blank'><FiGithub /></Link>
                                    <Link to={item.link} target='_blank'><IoNavigateCircleOutline /></Link>
                                </div>
                            </div>
                            <div className='detail-skills'>
                                {Object.values(item.skills).map((skill, index) => (
                                    <span key={index} className='detail-skill'>{skill}</span>
                                ))}
                            </div>
                            <p className='detail-text'>
                                {item.text}
                            </p>

                        </div>
                    </div>

                </>
            )}
        </>
    )
}
