import CustomScatterChart, { DataSeries } from '../Components/ScatterChart'
import { ToolTipLine } from '../Components/ToolTipLine';
import { MedianEarningsAfterFiveYearsData, MedianEarningsAfterTenYearsData } from "../Data/MedianEarningsData"
import { dataInfo } from '../Data/Types'
import { TooltipContainer } from '../styles';
import { currency } from '../Utils/Formatters';

const MedianEarningsTimeChart = (): JSX.Element => {

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
          return (
            <TooltipContainer>
              <ToolTipLine>{label}</ToolTipLine>
              <ToolTipLine>{`Subject : ${payload[1].value}`}</ToolTipLine>
              <ToolTipLine>{`Earnings : ${currency(payload[0].value)}`}</ToolTipLine>
            </TooltipContainer>
          );
        }
      
        return null;
      };
      
    const dataSeries: DataSeries[] = [
        { name: 'Five Years', data: MedianEarningsAfterFiveYearsData,  fill: '#E57F84', shape: 'square' },
        { name: 'Ten Years', data: MedianEarningsAfterTenYearsData, fill: '#2F5061', shape: 'cross' }
    ]

    const xData: dataInfo = {
        type: 'number',
        dataKey: 'Earnings',
        domain: [20000, 'dataMax'],
        formatter: currency,
        ticks: [20000, 30000, 40000, 50000]
    }

    const yData: dataInfo = {
        type: 'category',
        dataKey: 'Subject',
        domain: []
    }

    const longestLabelLength = MedianEarningsAfterFiveYearsData
    .map(c => c.Subject)
    .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

    return (
        <CustomScatterChart
            data={dataSeries}
            xData={xData} 
            yData={yData}
            caption='Source: DfE Employment and Earnings Outcomes of Higher Education Graduates 2018/19 Table 6'
            showLegend={true}
            isVertical={true}
            longestLabelLength={longestLabelLength * 7}
            tooltip={<CustomTooltip /> }
        />
    )
};

export default MedianEarningsTimeChart