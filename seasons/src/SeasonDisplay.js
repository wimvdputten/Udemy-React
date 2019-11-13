import './SeasonDisplay.css';
import React from 'react';


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};
const seasonConfig = {
    summer: {
        text: 'Lets go to the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Its chilly',
        iconName: 'snowflake'
    }

};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //const icon = <i className={`${seasonConfig[season]} icon`}/>

    console.log(seasonConfig);
    const {text, iconName} = seasonConfig[season];


    return (<div className={`${season} season-display`}>
            <i className={`${iconName} massive icon icon-left`}/>
            <h1>{text}</h1>
            <i className={`${iconName} massive icon icon-right`}/>
        </div>
    );
};


export default SeasonDisplay;
