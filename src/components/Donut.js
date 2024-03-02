import { Box } from '@chakra-ui/react';

const Donut = () => {
    const pieData = [
        { x: 'Java', value: 20 },
        { x: 'Python', value: 20 },
        { x: 'HTML&CSS', value: 15 },
        { x: 'JavaScript', value: 15 },
        { x: 'C', value: 15 },
        { x: 'Solidity', value: 5 },
        { x: 'Assembly/x86', value: 5 },
        { x: 'Go', value: 5 }
    ];

    const chartData = {
        chart: {
            type: 'pie',
            title: '⌨️ Coding Skills',
            background: '#00101f',
            innerRadius: '55%',
            palette: [
                '#65fddd',
                '#e96444',
                '#6eaeeb',
                '#a4124c',
                '#3424ac',
                'black',
                '#2e1c0b',
                'limegreen'
            ],
            data: pieData
        }
    };

    <Box id="donut" style={{ height: '300px', width: '300px' }}>
        <AnyChart
            {...chartData}
            instanceId="donut-chart"
        />
    </Box>
}

export default Donut