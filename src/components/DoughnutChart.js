import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current !== null) {
            chartInstance.current.destroy();
        }

        if (chartRef.current && chartRef.current.getContext) {
            const myChartRef = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(myChartRef, {
                type: 'doughnut',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        backgroundColor: data.backgroundColor,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'gray',
                            }
                        }
                    }
                }
            });
        }
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default DoughnutChart;
