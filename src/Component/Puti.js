import React, {Component} from 'react';
import {PutiConsumer} from "./myContext";

class Puti extends Component {
    render() {
        return (
            <div>
                <h1>

                    <PutiConsumer>
                        {
                            msg=>{
                                return msg;
                            }

                        }
                    </PutiConsumer>

                </h1>
            </div>
        );
    }
}

export default Puti;