import React, { useState } from 'react'
import '../styles/Team.css'

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import img_kite2 from '../Assets/img_kite2.svg'
import cloud_point1 from '../Assets/cloud_point1.svg'
import cloud_point2 from '../Assets/cloud_point2.svg'

import Profile from '../Components/Profile'
import profileData from '../Assets/Profile/profileData.js'

const Team = () => {

    const teams = [
        { id: 1, name: "Primary Organizers", role: "Primary Organizer" },
        { id: 2, name: "Project Managers", role: "Project Manager" },
        { id: 3, name: "Website Developers", role: "Website Developer" },
        { id: 4, name: "UI/UX", role: "UI/UX" },
        { id: 5, name: "Past Committees", role: "Past Committee" },
    ]

    const [selectedRole, setSelectedRole] = useState("Primary Organizer")
    const [selectedCommittee, setSelectedCommittee] = useState("")

    const selectTeam = (role) => {
        setSelectedRole(role)
        setSelectedCommittee("")
    }

    /* Automatically extract committees */

    const committees = [
        ...new Set(
            profileData
                .filter(person => person.committee)
                .map(person => person.committee)
        )
    ].sort().reverse()

    return (
        <div className='team-page'>

            <NavBar />

            <div className="team-content">

                <div className='meet-the-team'>

                    {/* LEFT NAVBAR */}

                    <div className="team-navbar">
                        {teams.map((team) => (
                            <button
                                key={team.id}
                                onClick={() => selectTeam(team.role)}
                                className={selectedRole === team.role ? 'active' : ''}
                            >
                                <span>{team.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* TEAM MEMBERS */}

                    <div className='team-members-container'>

                        <h1>MEET THE TEAM</h1>

                        <div className='team-members'>

                            {selectedRole === "Past Committee" ? (

                                <div>

                                    {/* DROPDOWN FILTER */}

                                    <div className="committee-filter">

                                        <select
                                            value={selectedCommittee}
                                            onChange={(e) => setSelectedCommittee(e.target.value)}
                                        >

                                            <option value="">
                                                All Committees
                                            </option>

                                            {committees.map((committee) => (
                                                <option
                                                    key={committee}
                                                    value={committee}
                                                >
                                                    {committee}
                                                </option>
                                            ))}

                                        </select>

                                    </div>

                                    {/* COMMITTEE LIST */}

                                    {(selectedCommittee ? [selectedCommittee] : committees)
                                        .map((committee) => {

                                            const members = profileData.filter(
                                                person => person.committee === committee
                                            )

                                            if (members.length === 0) return null

                                            return (
                                                <div
                                                    className="committee-container"
                                                    key={committee}
                                                >

                                                    <h2>{committee}</h2>

                                                    <div className='year-committee-container'>

                                                        {members.map((person) => (
                                                            <Profile
                                                                key={person.id}
                                                                person={{
                                                                    ...person,
                                                                    role: [committee]
                                                                }}
                                                            />
                                                        ))}

                                                    </div>

                                                </div>
                                            )

                                        })}

                                </div>

                            ) : (

                                profileData
                                    .filter(person =>
                                        person.role.includes(selectedRole)
                                    )
                                    .map((person) => (
                                        <Profile
                                            key={person.id}
                                            person={{
                                                ...person,
                                                role: [selectedRole]
                                            }}
                                        />
                                    ))

                            )}

                        </div>

                    </div>

                </div>

                {/* KITE SECTION */}

                <div className='kite-container'>

                    <img
                        className='cloud_point2'
                        src={cloud_point2}
                    />

                    <img
                        className='cloud_point1'
                        src={cloud_point1}
                    />

                    <img
                        className='kite'
                        src={img_kite2}
                    />

                </div>

                <Footer />

            </div>

        </div>
    )
}

export default Team