
import React, { Component } from "react";
import Parent from '../Parent/Parent'

class BodyApp extends Component {



    render() {

        return (

            <div>

                <Parent />

                {/*
               
                GetData.map(d => {

                   return (
                    <div>
                    <span>{d.title}</span>
                    <a href={d.formats['application/epub+zip']} target={'_blank'}>click</a>
                    </div>
                        )

                        })
                            
               */}

            </div>
        )
    }
}
export default BodyApp;