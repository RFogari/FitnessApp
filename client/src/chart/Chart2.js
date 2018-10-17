import React from "react";
import "./style.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const workoutData = [
    { name: 'Sunday', uv: 4000, "Minutes Jogged": 24, amt: 24 },
    { name: 'Monday', uv: 3000, "Minutes Jogged": 13, amt: 22 },
    { name: 'Tuesday', uv: 2000, "Minutes Jogged": 98, amt: 22 },
    { name: 'Wednesday', uv: 2780, "Minutes Jogged": 39, amt: 20 },
    { name: 'Thursday', uv: 1890, "Minutes Jogged": 48, amt: 21 },
    { name: 'Friday', uv: 2390, "Minutes Jogged": 38, amt: 25 },
    { name: 'Saturday', uv: 3490, "Minutes Jogged": 43, amt: 21 },
];

export default class Chart2 extends React.Component{
    render() {
        return (
            <div className="lineChart">
            <LineChart id="lineChart" width={600} height={300} data={workoutData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Minutes Jogged" stroke="#1824d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
            </div>
        );
    }
}


