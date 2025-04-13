import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Alice",
        "physics": 85,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 2,
        "name": "Bob",
        "physics": 75,
        "chemistry": 82,
        "math": 88
    },
    {
        "id": 3,
        "name": "Charlie",
        "physics": 90,
        "chemistry": 91,
        "math": 95
    },
    {
        "id": 4,
        "name": "David",
        "physics": 60,
        "chemistry": 65,
        "math": 70
    },
    {
        "id": 5,
        "name": "Eve",
        "physics": 88,
        "chemistry": 79,
        "math": 84
    },
    {
        "id": 6,
        "name": "Fiona",
        "physics": 72,
        "chemistry": 76,
        "math": 80
    },
    {
        "id": 7,
        "name": "George",
        "physics": 95,
        "chemistry": 89,
        "math": 90
    },
    {
        "id": 8,
        "name": "Hannah",
        "physics": 68,
        "chemistry": 74,
        "math": 77
    },
    {
        "id": 9,
        "name": "Ian",
        "physics": 82,
        "chemistry": 85,
        "math": 89
    },
    {
        "id": 10,
        "name": "Jenny",
        "physics": 78,
        "chemistry": 80,
        "math": 83
    }
];


const ResultChart = () => {
    return (
        <div >
            {/* mobile */}
            <div className='md:hidden'>
                <LineChart width={350} height={500} data={resultData}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey="math"></Line>
                    <Line dataKey='physics' stroke='red'></Line>
                    <Line dataKey='chemistry' stroke='orange'></Line>
                </LineChart>
            </div>
            {/* desktop */}
            <div className='hidden md:block'>
                <LineChart width={800} height={500} data={resultData}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey="math"></Line>
                    <Line dataKey='physics' stroke='red'></Line>
                    <Line dataKey='chemistry' stroke='orange'></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default ResultChart;