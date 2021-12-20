import React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { ToolTipLine } from "../Components/ToolTipLine"
import { SalaryAfterFiveYearsData } from "../Data/SalaryAfterFiveYearsData"
import { CaptionText, TooltipContainer } from "../styles"
import { currency } from "../Utils/Formatters"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <ToolTipLine>{label}</ToolTipLine>
        <ToolTipLine>{`Female : ${currency(payload[0].value)}`}</ToolTipLine>
        <ToolTipLine>{`Male : ${currency(payload[1].value)}`}</ToolTipLine>
      </TooltipContainer>
    );
  }

  return null;
};

function SalaryAfterFiveYearsChart() {

  const xLabelProps =
    { fontSize: 'medium', fill: '#666666', fontFamily: 'Helvetica', position: 'insideBottom', offset: 0, dy: 10 }

  const longestLabelLength = SalaryAfterFiveYearsData
    .map(c => c.priorAttainment)
    .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

  return (

    <div style={{ marginBottom: '40px' }}>
      <BarChart
        width={900}
        height={300}
        data={SalaryAfterFiveYearsData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 24,
        }}
        layout='vertical'
        style={{ paddingRight: '24px' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          tickFormatter={currency}
          domain={[20000, 46000]}
          type='number'
          label={{ value: 'Median earnings', ...xLabelProps }}
          ticks={[20000, 25000, 30000, 35000, 40000, 45000]}
        />
        <Legend layout='vertical' verticalAlign='top' align='right' iconSize={10} />        
        <YAxis dataKey="priorAttainment" type='category' width={longestLabelLength * 7} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="femaleMedianEarnings" fill="#E57F84" name='Female' />
        <Bar dataKey="maleMedianEarnings" fill="#2F5061" name='Male' />
      </BarChart>
      <CaptionText style={{ marginLeft: '16px' }} >Source: DfE Employment and Earnings Outcomes of Higher Education Graduates 2018/19 Table 11</CaptionText>
    </div>
  )
}

export default SalaryAfterFiveYearsChart