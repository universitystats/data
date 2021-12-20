import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ToolTipLine } from "../Components/ToolTipLine";
import { StudentLoanRepaymentData } from "../Data/StudentLoanRepaymentData";
import { CaptionText, TooltipContainer } from "../styles";
import { currency } from "../Utils/Formatters";

function StudentLoanRepaymentChart() {

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <TooltipContainer>
                    <ToolTipLine>{`Salary: ${currency(payload[0].payload.salary)}`}</ToolTipLine>
                    <ToolTipLine>{`Student loan paid off: ${currency(payload[0].payload.studentLoanPaidOff)}`}</ToolTipLine>
                </TooltipContainer>
            );
        } else {
            return (null)
        }
    };

    const xLabelProps =
        { fontSize: 'medium', fill: '#666666', fontFamily: 'Helvetica', position: 'insideBottom', offset: 0, dy: 15 }

    return (
        <div style={{ marginBottom: '40px' }}>
            <LineChart
                width={700}
                height={300}
                data={StudentLoanRepaymentData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 24,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="salary"
                    label={{ value: 'Salary 10 years after graduation', ...xLabelProps }}
                    tickFormatter={currency}
                    ticks={[20000, 30000, 40000, 50000, 60000]} />
                <YAxis
                    tickFormatter={currency}
                    ticks={[0, 10000, 20000, 30000, 40000, 50000]}
                    domain={[0, 50000]} />
                <Tooltip content={<CustomTooltip />} />

                <Line type="monotone" dataKey="studentLoanPaidOff" stroke="#2F5061" activeDot={{ r: 8 }} />
            </LineChart>
            <CaptionText style={{ marginLeft: '16px' }} >Source: derived from data given</CaptionText>
        </div>
    )

}

export default StudentLoanRepaymentChart;