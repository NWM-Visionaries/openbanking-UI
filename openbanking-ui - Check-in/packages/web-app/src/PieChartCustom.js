import React from 'react'
import PieChart from '@culturehq/charts/dist/PieChart'
import ReactApexCharts from 'react-apexcharts'

import VerticalBarChar from '@culturehq/charts/dist/VerticalBarChart'

export default function PieChartCustom( { data = {} })
{
    const series = Object.values(data)
            const options = {
                   labels: Object.keys(data), 
                   plotOptions: {
                    pie: {
                      size: 300
                    }     
                },
                legend: {
                    position: 'bottom'
                  }
              }
                   

    
    return <div>
        <ReactApexCharts type="donut" series={series} options={options} width={500}></ReactApexCharts>
    </div>
}