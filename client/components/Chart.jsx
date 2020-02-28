import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
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
        <div className="App">
            <header>
                <h1>Employees</h1>
            </header>
            <h2 style={{ textAlign: "left" }}>Line Chart</h2>
            <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
      </div>
      );
    }
}
export default Chart;