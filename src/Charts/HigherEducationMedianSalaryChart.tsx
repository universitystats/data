import CustomScatterChart, { DataSeries } from "../Components/ScatterChart"
import { ToolTipLine } from "../Components/ToolTipLine"
import { Post1992GraduateMedianSalary, Pre1992GraduateMedianSalary, RussellGroupGraduateMedianSalary } from "../Data/HigherEducationMedianSalaryData"
import { dataInfo } from "../Data/Types"
import { TooltipContainer } from "../styles"
import { currency, percentage } from "../Utils/Formatters"

const HigherEducationMedianSalaryChart = (): JSX.Element => {

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <TooltipContainer>
                    <ToolTipLine>{`University : ${payload[0].payload.University}`}</ToolTipLine>
                    <ToolTipLine>{`Median earnings : ${currency(payload[1].value)}`}</ToolTipLine>
                    <ToolTipLine>{`Proportion of students : ${percentage(payload[0].value)}`}</ToolTipLine>
                </TooltipContainer>
            );
        }

        return null;
    };
    const dataSeries: DataSeries[] = [
        { name: 'Post 1992', data: Post1992GraduateMedianSalary, fill: '#E57F84', shape: 'square' },
        { name: 'Pre 1992', data: Pre1992GraduateMedianSalary, fill: '#2F5061', shape: 'cross' },
        { name: 'Russell Group', data: RussellGroupGraduateMedianSalary, fill: '#4297A0', shape: 'triangle' }
    ]

    const xData: dataInfo = {
        type: 'number',
        dataKey: 'ProportionOfStudents',
        domain: ['0', '100'],
        unit: '%',
        ticks: [25, 50, 75, 100]
    }

    const yData: dataInfo = {
        type: 'number',
        dataKey: 'MedianSalary',
        domain: [15000, 47500],
        formatter: currency,
        ticks: [15000, 20000, 25000, 30000, 35000, 40000, 45000]
    }

    const longestLabelLength = RussellGroupGraduateMedianSalary
        .map(c => currency(c.MedianSalary))
        .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

    return (
        <CustomScatterChart
            data={dataSeries}
            xData={xData}
            yData={yData}
            caption='Source: DfE Graduate Outcomes Provider Level Data 2017/18 Table 3'
            showLegend={true}
            isVertical={false}
            xLabel='Proportion of students'
            longestLabelLength={longestLabelLength * 9}
            height={400}
            tooltip={<CustomTooltip />}
        />
    )
}

export default HigherEducationMedianSalaryChart