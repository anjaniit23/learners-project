import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get('http://localhost:5000/api')
            .then(res => {
                setData(res.data.text);
            })
    });

    return (
        <div> {data}</div>
    )
}
export default Dashboard;