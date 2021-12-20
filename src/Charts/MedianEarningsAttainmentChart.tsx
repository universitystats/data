import React from "react"
import CustomScatterChart, { DataSeries } from "../Components/ScatterChart"
import { ToolTipLine } from "../Components/ToolTipLine"
import { MedianEarningsBtecData, MedianEarningsFourAsOrMoreData, MedianEarningsPointsData } from "../Data/MedianEarningsData"
import { dataInfo } from "../Data/Types"
import { TooltipContainer } from "../styles"
import { currency } from "../Utils/Formatters"

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <TooltipContainer>
                <ToolTipLine>{`Subject: ${payload[1].value}`}</ToolTipLine>
                <ToolTipLine>{`Earnings: ${currency(payload[0].value)}`}</ToolTipLine>
            </TooltipContainer>
        );
    } else {
        return (null)
    }
};

const MedianEarningsAttainmentChart = (): JSX.Element => {

    const dataSeries: DataSeries[] = [
        { name: 'Four As or more', data: MedianEarningsFourAsOrMoreData, fill: '#4297A0', shape: 'triangle'},
        { name: '240-299 points', data: MedianEarningsPointsData, fill: '#E57F84', shape: 'square' },
        { name: 'BTEC', data: MedianEarningsBtecData, fill: '#2F5061', shape: 'cross' }
    ]

    const xData: dataInfo = {
        type: 'number',
        dataKey: 'Earnings',
        domain: ['20000', '71000'],
        formatter: currency,
        ticks: [20000, 30000, 40000, 50000, 60000, 70000],
    }

    const yData: dataInfo = {
        type: 'category',
        dataKey: 'Subject',
    }

    const longestLabelLength = MedianEarningsFourAsOrMoreData
        .map(c => c.Subject)
        .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

    return (
        <CustomScatterChart
            data={dataSeries}
            xData={xData}
            yData={yData}
            caption='Source: DfE Employment and Earnings Outcomes of Higher Education Graduates 2018/19 Table 12'
            showLegend={true}
            isVertical={true}
            longestLabelLength={longestLabelLength * 7}
            tooltip={<CustomTooltip />}
        />
    )
}

export default MedianEarningsAttainmentChart