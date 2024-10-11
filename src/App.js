import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [pieChartData, setPieChartData] = useState({});

    // Fetch data and set state...

    return (
        <div className="App">
            <h1>Transactions</h1>
            {/* Implement table, statistics, and charts here */}
        </div>
    );
}

export default App;
