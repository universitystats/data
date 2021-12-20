import React from "react";
import CustomScatterChart, { DataSeries } from "../Components/ScatterChart";
import { ToolTipLine } from "../Components/ToolTipLine";
import { ProportionOfStudentLoanRepaidData } from "../Data/StudentLoanRepaymentData";
import { dataInfo } from "../Data/Types";
import { TooltipContainer } from "../styles";
import { percentage } from "../Utils/Formatters";

const StudentLoanProportionChart = (): JSX.Element => {

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <TooltipContainer>
                    <ToolTipLine>{`Subject : ${payload[1].value}`}</ToolTipLine>
                    <ToolTipLine>{`Percentage : ${percentage(payload[0].value)}`}</ToolTipLine>
                </TooltipContainer>
            );
        }

        return null;
    };

    const dataSeries: DataSeries[] = [
        { name: '', data: ProportionOfStudentLoanRepaidData, fill: '#2F5061', shape: 'cross' }
    ]

    const xData: dataInfo = {
        type: 'number',
        dataKey: 'studentLoanPaidOffPercent',
        domain: [20, 80],
        unit: '%',
        ticks: [20, 40, 60, 80]
    }

    const yData: dataInfo = {
        type: 'category',
        dataKey: 'Subject'
    }

    const longestLabelLength = ProportionOfStudentLoanRepaidData
        .map(c => c.Subject)
        .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

    return (
        <CustomScatterChart
            data={dataSeries}
            xData={xData}
            yData={yData}
            caption='Sources: Diagram 7 and DfE Employment and Earnings Outcomes of Higher Education Graduates 2018/19 Table 6'
            xLabel='Percentage of sudent loan paid off'
            showLegend={false}
            isVertical={true}
            longestLabelLength={longestLabelLength * 7}
            tooltip={<CustomTooltip />}
        />
    )

}

export default StudentLoanProportionChart;