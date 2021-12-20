import CustomScatterChart, { DataSeries } from "../Components/ScatterChart"
import { GradNetIncomeData as MaleGradNetIncomeData } from "../Data/MaleGradNetIncomeData"
import { GradNetIncomeData as FemaleGradNetIncomeData } from "../Data/FemaleGradNetIncomeData"
import { dataInfo } from "../Data/Types"
import { TooltipContainer } from "../styles"
import { ToolTipLine } from "../Components/ToolTipLine"
import { percentage } from "../Utils/Formatters"
import { longestLabelLength } from "../Utils/LongestLabelLength"

const GradNetIncomePremiumChart = (): JSX.Element => {

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <TooltipContainer>
                    <ToolTipLine>{`Subject: ${payload[1].value}`}</ToolTipLine>
                    <ToolTipLine>{`Percentage: ${percentage(payload[0].value)}`}</ToolTipLine>
                </TooltipContainer>
            );
        } else {
            return (null)
        }
    };

    const dataSeries: DataSeries[] = [
        { name: 'Female', data: FemaleGradNetIncomeData, fill: '#E57F84', shape: 'square' },
        { name: 'Male', data: MaleGradNetIncomeData, fill: '#2F5061', shape: 'cross' },
    ]

    const xData: dataInfo = {
        type: 'number',
        dataKey: 'percentageOfStudents',
        domain: ['0', '100'],
        unit: '%',
        ticks: [25, 50, 75, 100]
    }

    const yData: dataInfo = {
        type: 'category',
        dataKey: 'subject',
    }



    return (
        <CustomScatterChart
            data={dataSeries}
            xData={xData}
            yData={yData}
            caption='Source: IFS 2020 The impact of undergraduate degrees on lifetime earnings'
            showLegend={true}
            isVertical={true}
            longestLabelLength={longestLabelLength(MaleGradNetIncomeData, 'subject') * 9}
            xLabel='Percentage of students'
            tooltip={<CustomTooltip />}
        />
    )
}

export default GradNetIncomePremiumChart