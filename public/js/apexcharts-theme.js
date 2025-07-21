/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
*/

// Ini adalah tempat Anda bisa mengubah warna default.
export const themePalette = [
    '#4299E1', 
    '#48BB78', 
    '#F6AD55', 
    '#9F7AEA', 
    '#ED8936', 
    '#ECC94B', 
    '#38B2AC', 
    '#A0AEC0'  
];

const baseTheme = {
    chart: {
        foreColor: '#373d3f', 
        fontFamily: 'Inter, sans-serif', 
        toolbar: {
            show: true, 
            tools: {
                download: true, 
                selection: true, 
                zoom: true,      
                zoomin: true,
                zoomout: true,
                pan: true,       
                reset: true,     
                customIcons: []  
            }
        }
    },
    colors: themePalette, 
    stroke: { width: 2, curve: 'smooth' },
    dataLabels: {
        style: { colors: ['#FFFFFF'] }, 
        dropShadow: { enabled: true, top: 1, left: 1, blur: 1, opacity: 0.45 }
    },
    markers: { size: 4, strokeWidth: 0, hover: { sizeOffset: 3 } },
    tooltip: { theme: 'dark' }, 
    legend: {
        position: 'top', horizontalAlign: 'left', fontSize: '14px', fontFamily: 'inherit',
        fontWeight: 500, markers: { width: 12, height: 12, strokeWidth: 0, radius: 12 },
        itemMargin: { horizontal: 10, vertical: 5 },
    }
};

const cartesianTheme = {
    ...baseTheme,
    xaxis: {
        labels: { style: { colors: '#888ea8' } }, 
        axisBorder: { color: '#e0e6ed' }, 
        axisTicks: { color: '#e0e6ed' } 
    },
    yaxis: {
        labels: { style: { colors: '#888ea8' } } 
    },
    grid: { borderColor: '#e0e6ed' } 
};

export const chartTheme = {
    line: { ...cartesianTheme, stroke: { ...cartesianTheme.stroke, width: 3 } },
    area: {
        ...cartesianTheme,
        stroke: { ...cartesianTheme.stroke, width: 3 },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0, 90, 100] } }
    },
    bar: {
        ...cartesianTheme,
        plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
        dataLabels: { ...cartesianTheme.dataLabels, enabled: false }, 
        stroke: { show: true, width: 2, colors: ['transparent'] },
    },
    candlestick: {
        ...cartesianTheme,
        plotOptions: { candlestick: { colors: { upward: '#48BB78', downward: '#ED8936' }, wick: { useFillColor: true } } }, 
        xaxis: { ...cartesianTheme.xaxis, type: 'datetime' }
    },
    boxPlot: { ...cartesianTheme, plotOptions: { boxPlot: { colors: { upper: '#4299E1', lower: '#F6AD55' } } } }, 
    bubble: { ...cartesianTheme, dataLabels: { ...cartesianTheme.dataLabels, enabled: false }, xaxis: { ...cartesianTheme.xaxis, type: 'numeric' }, plotOptions: { bubble: { zScaling: true } } },
    scatter: { ...cartesianTheme, markers: { ...cartesianTheme.markers, size: 6, strokeWidth: 1, hover: { sizeOffset: 4 } } },
    heatmap: {
        ...cartesianTheme,
        dataLabels: { ...cartesianTheme.dataLabels, enabled: false },
        plotOptions: { heatmap: { enableShades: true, shadeIntensity: 0.5, colorScale: { ranges: [
            { from: 0, to: 25, name: 'Rendah', color: '#ED8936' }, 
            { from: 26, to: 50, name: 'Sedang', color: '#48BB78' }, 
            { from: 51, to: 75, name: 'Tinggi', color: '#4299E1' }, 
            { from: 76, to: 100, name: 'Sangat Tinggi', color: '#9F7AEA' } 
        ] } } }
    },
    rangeBar: {
        ...cartesianTheme,
        plotOptions: { bar: { horizontal: true, borderRadius: 5 } },
        xaxis: { ...cartesianTheme.xaxis, type: 'datetime' },
        dataLabels: {
            ...cartesianTheme.dataLabels,
            enabled: true,
            formatter: (val, { seriesIndex, dataPointIndex, w }) => {
                const data = w.config.series[seriesIndex].data[dataPointIndex];
                return data.x || ''; 
            },
            style: { colors: ['#333'] } 
        }
    },

    donut: {
        ...baseTheme,
        stroke: { ...baseTheme.stroke, colors: ['#FFFFFF'] },
        plotOptions: { pie: { donut: { labels: { show: true, name: { show: true, offsetY: -10 }, value: { show: true, offsetY: 10, formatter: (val) => val }, total: { show: true, label: 'Total', formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0) } } } } },
        dataLabels: { enabled: true, formatter: (val) => val.toFixed(1) + '%' },
        legend: { ...baseTheme.legend, position: 'bottom' }
    },
    pie: { 
        ...baseTheme,
        stroke: { ...baseTheme.stroke, colors: ['#FFFFFF'] },
        dataLabels: { enabled: true, formatter: (val) => val.toFixed(1) + '%' },
        legend: { ...baseTheme.legend, position: 'bottom' }
    },
    radialBar: { ...baseTheme, plotOptions: { radialBar: { hollow: { size: '70%' }, dataLabels: { name: { show: true }, value: { show: true } } } } },
    polarArea: {
        ...baseTheme,
        stroke: { ...baseTheme.stroke, colors: ['#FFFFFF'] },
        plotOptions: { polarArea: { rings: { strokeWidth: 1, strokeColor: '#e0e6ed' }, spokes: { strokeWidth: 1, connectorColors: '#e0e6ed' } } },
        legend: { ...baseTheme.legend, position: 'bottom' }
    },
    radar: { ...baseTheme, stroke: { ...baseTheme.stroke, width: 2 }, fill: { opacity: 0.1 }, markers: { ...baseTheme.markers, size: 4, strokeWidth: 1 } },
    treemap: { ...baseTheme, plotOptions: { treemap: { distributed: true, enableShades: true, shadeIntensity: 0.6 } }, legend: { ...baseTheme.legend, show: false } }
};
