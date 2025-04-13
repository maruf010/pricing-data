import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({ markPromise }) => {
    const markDataRes = use(markPromise);
    // console.log(markData);
    const marksData = markDataRes.data;

    // Data processing
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    });
    // console.log(marksChartData);

    return (
        <div className='mt-10'>
            <div className='md:hidden'>
                <BarChart width={350} height={300} data={marksChartData}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="avg" fill='violet'></Bar>
                    <Bar dataKey="math" fill='green'></Bar>
                </BarChart>
            </div>
            {/* desktop */}
            <div className='hidden md:block'>
                <BarChart width={800} height={300} data={marksChartData}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="avg" fill='violet'></Bar>
                    <Bar dataKey="math" fill='green'></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default MarkChart;