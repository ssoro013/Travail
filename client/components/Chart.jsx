import React, { Component } from "react";
import {
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area
} from "recharts";


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        var data = this.props.employees;
        return (
        <div>
            <header>
                <h1>Employees</h1>
            </header>
            <h2 style={{ textAlign: "left" }}></h2>
            <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="employees" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#employees)" />
            </AreaChart>
      </div>
      );
    }
}
export default Chart;