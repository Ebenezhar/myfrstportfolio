import { Player, Controls } from '@lottiefiles/react-lottie-player'
import React from 'react'

function Workcard({data}) {
    return (
        <div className="col-lg-12 pt-3 pr-3 pb-3 container-div">
            <div className="container text-center" data-aos-once="true" data-aos="fade-right">
                <div className="row">
                    <div className="col-lg-3 p-4 logo-div">
                        <Player
                            className="justify-content-start"
                            autoplay
                            loop
                            src={data.lottie}
                            style={{ height: "100px", width: "100px" }}
                        >
                            <Controls
                                // visible={false}
                                buttons={["play", "repeat", "frame", "debug"]}
                            />
                        </Player>
                    </div>
                    <div className="col-lg-8 p-4">
                        <h3 className=" p-2 ">{data.name}</h3>

                        <h5>{data.tech} </h5>
                    </div>
                    <div className="col-lg-1 p-2 link-div">
                      <div row>
                      <a className="m-1 link-content" target="_blank" href={data.git}><i class="fa-brands fa-github"></i></a>
                      <a className="m-1 link-content" target="_blank" href={data.netlify}><i class="fa-solid fa-earth-americas"></i></a>
                      </div>
                    </div>
                </div>
            </div>
        </div>



        // <div className="container work-div">
        //     <div className="row ">
        //         <div class="row justify-content-start">
        //             <div class="col-lg-4 logo-div">
        //                 <Player
        //                     className="player1 youtube"
        //                     autoplay
        //                     loop
        //                     src="https://assets1.lottiefiles.com/packages/lf20_dx3CMu.json"
        //                     style={{ height: "100px", width: "100px" }}
        //                 >
        //                     <Controls
        //                         visible={false}
        //                         buttons={["play", "repeat", "frame", "debug"]}
        //                     />
        //                 </Player>
        //             </div>
        //             <div class="col-lg-8 pt-3 work-content">
        //                 <div className='row justify-content-end'>                           
        //                     <div className='col-lg-10'>
        //                         <h4>stackoverflow clone</h4>
        //                         <p>Reactjs / Nodejs / MongoDB / JWT / Cookies</p>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Workcard