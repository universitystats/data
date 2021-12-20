import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'
import { dataInfo } from '../Data/Types'
import { CaptionText } from '../styles'

export interface DataSeries {
    name: string;
    data: any[];
    fill: string;
    shape?: 'star' | 'triangle' | 'cross' | 'circle' | 'square' | 'diamond' | 'wye';
}

interface ScatterChartProps {
    data: DataSeries[]
    xData: dataInfo
    yData: dataInfo
    caption: string
    xLabel?: string
    showLegend: boolean
    isVertical: boolean
    longestLabelLength: number
    height?: number
    tooltip?: JSX.Element
}

const xLabelProps =
    { fontSize: 'medium', fill: '#666666', fontFamily: 'Helvetica', position: 'insideBottom', offset: 0, dy: 10 }

const yLabelProps =
    { fontSize: 'small', fill: '#666666', fontFamily: 'Helvetica', position: 'insideLeft', offset: 0, angle: -90 }

const CustomScatterChart = (props: ScatterChartProps): JSX.Element => {
    const { data, xData, yData, caption, xLabel, showLegend, isVertical, longestLabelLength, height, tooltip } = props

    return (
        <div style={{ marginBottom: '40px' }}>
            <ScatterChart
                width={900}
                height={height ?? 1000}
                layout={isVertical ? 'vertical' : 'horizontal'}
                margin={{ bottom: 24, left: 10, top: 10 }}
                style={{ paddingRight: '24px' }}>
                <Tooltip content={tooltip ?? undefined} />
                {data.map((d) => (
                    <Scatter data={d.data} name={d.name} key={d.name} fill={d.fill} shape={d.shape} legendType={d.shape} />
                ))}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    type={xData.type}
                    dataKey={xData.dataKey}
                    domain={xData.domain}
                    fontSize={'medium'}
                    label={{ value: xLabel ?? xData.dataKey, ...xLabelProps }}
                    unit={xData.unit}
                    tickFormatter={xData.formatter}
                    ticks={xData.ticks}
                />
                <YAxis
                    type={yData.type}
                    dataKey={yData.dataKey}
                    domain={yData.domain}
                    width={longestLabelLength}
                    fontSize={'medium'}
                    allowDuplicatedCategory={false}
                    unit={yData.unit}
                    tickFormatter={yData.formatter}
                    ticks={yData.ticks}
                    allowDataOverflow={false}
                />
                {showLegend &&
                    <Legend layout='vertical' verticalAlign='top' align='right' iconSize={10} />
                }
            </ScatterChart>
            <CaptionText style={{ marginLeft: '16px' }} >{caption}</CaptionText>
        </div>
    )
};

export default CustomScatterChart