import React from 'react'
import Header from '../Header/Header'
import { DashboardStyled } from './Dashboard.styled'
import { Button } from '../../assets/styles/Button'
import { useState } from 'react'

function Dashboard() {
    const [myLinks, setMyLinks] = useState('')
    const addLink = (e) => {

    }
    return (
        <div>
            <Header />
            <DashboardStyled>
                <section>
                    <h2>My Links</h2>
                    <div>
                        <div className='item'>
                            <div className='details'>
                                <p>https://linkify.io/sdfsdf</p>
                                <span>F</span>
                                <p>https://linkify.io/sdfsdf</p>
                            </div>
                            <span className='delete-btn'>D</span>

                        </div>
                        <div className='item'>
                            <div className='details'>
                                <p>https://linkify.io/sdfsdf</p>
                                <span>F</span>
                                <p>https://linkify.io/sdfsdf</p>
                            </div>
                            <span className='delete-btn'>D</span>

                        </div>
                        <Button>Add</Button>
                    </div>
                </section>
                <section>
                    <h2>My LinkTree</h2>
                    <p>Link: https://linkify.io/sdfidfs</p>
                    <div>
                        <div><p>Name</p><p>Link</p></div>
                        <div className='item'>
                            <div className='details'>
                                <p>https://linkify.io/sdfsdf</p>
                                <span>F</span>
                                <p>https://linkify.io/sdfsdf</p>
                            </div>
                            <span className='delete-btn'>D</span>

                        </div>
                        <Button>Add</Button>
                    </div>
                </section>
            </DashboardStyled>
        </div>
    )
}

export default Dashboard;