import React from 'react';

const LinkTree = props => {
    if (!props.branches) {
        return (

            <div className="">Loading...</div>
        );
    }
    if (props.branches.length === 0) {
        return (
            <div className="">
                No Tree Found...
            </div>
        );
    }
    return (
        <div>
            {
                props.branches.map(branch => {
                    return (
                        <div className='item'>
                            <div className='details'>
                                <p>Name: {branch.name}</p>
                                <span>F</span>
                                <p>Link: {branch.link}</p>
                            </div>
                            <button className='delete-btn'>D</button>

                        </div>

                    );
                })
            }
        </div>

    )
}

export default LinkTree;