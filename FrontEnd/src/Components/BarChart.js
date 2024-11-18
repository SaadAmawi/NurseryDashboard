import React, { useEffect, useState } from 'react';

import { ResponsiveBar } from '@nivo/bar';

function BarChart() {
//   const barData = [];
const [loading, setLoading] = useState(true);
    
  const [barData, setBarData] = useState([]);
 
    

  return (
    <ResponsiveBar
      data={barData}
      keys={[
        
        'Attention, immediate recall, and orientation',
        'Delayed recall with interference',
        'Executive function plus extrapolation',
        'Memory',
        'Numeric calculation and registration',
        'Registration and digit spane',
        'Visual spatial',
        'Visual spatial and executive function',
      ]}
      indexBy="emailToAttention"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845', '#227093', '#4A235A', '#7D3C98', '#17202A']}
      borderColor={{
        from: 'color',
        modifiers: [['brighter', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Category',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Scores',
        labelTextColor: 'white',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={'black'}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
      }
    />
  );
}

export default BarChart;
