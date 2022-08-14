import React from 'react'

function Skillcard({ data }) {
    return (
        <div className='card m-2 skill-card' style={{ width: "10rem" }}>
            <div className='row '>
                <div className='col-lg-12  justify-content-center'>
                    <img class="img-fluid" src={data.logo} />
                </div>
                <div className='col-lg-12'>
                    <h4 className='header2'>{data.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default Skillcard