import React, {useState} from 'react';

const Demo = () => {

    const [name, setName] = useState({

        country: "Bangladesh"
    })

    const ChangeCountry=()=>{

        setName({country: "America"})
    }

    return (
        <div>

            <h1>{name.country}</h1>
            <button onClick={ChangeCountry}>Change Country</button>

        </div>
    );
};

export default Demo;
