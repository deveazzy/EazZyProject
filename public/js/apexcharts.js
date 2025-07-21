/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
*/

// Mengimpor tema dari file apexcharts-theme.js
import { chartTheme } from "./apexcharts-theme.js";

// Fungsi-fungsi helper untuk menghasilkan data grafik
function generateDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    let series = [];
    while (i < count) {
        let x = baseval;
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

function generateData(count, yrange) {
    let i = 0;
    let series = [];
    while (i < count) {
        let x = 'w' + (i + 1).toString();
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x: x, y: y });
        i++;
    }
    return series;
}

function generateCandlestickData(count) {
    let data = [];
    let baseval = new Date('11/01/2023').getTime();
    let i = 0;
    while (i < count) {
        let open = Math.random() * (100 - 50) + 50;
        let high = open + Math.random() * 20;
        let low = open - Math.random() * 20;
        let close = Math.random() * (high - low) + low;

        data.push({
            x: new Date(baseval),
            y: [open, high, low, close].map(val => parseFloat(val.toFixed(2)))
        });
        baseval += 86400000;
        i++;
    }
    return data;
}

function generateBoxPlotData(count) {
    let data = [];
    for (let i = 0; i < count; i++) {
        const min = Math.floor(Math.random() * 20) + 10;
        const q1 = Math.floor(Math.random() * 20) + min + 5;
        const median = Math.floor(Math.random() * 20) + q1 + 5;
        const q3 = Math.floor(Math.random() * 20) + median + 5;
        const max = Math.floor(Math.random() * 20) + q3 + 5;
        data.push({
            x: `Kategori ${i + 1}`,
            y: [min, q1, median, q3, max]
        });
    }
    return data;
}

function generateBubbleData(count, min, max) {
    let data = [];
    for (let i = 0; i < count; i++) {
        data.push([
            Math.floor(Math.random() * 70) + 1,
            Math.floor(Math.random() * (max - min + 1)) + min,
            Math.floor(Math.random() * 50) + 10
        ]);
    }
    return data;
}

function generateRangeBarData(count) {
    let data = [];
    let baseval = new Date('01/01/2024').getTime();
    for (let i = 0; i < count; i++) {
        let start = baseval + Math.floor(Math.random() * 10) * 86400000;
        let end = start + Math.floor(Math.random() * 5) * 86400000 + 3600000;
        data.push({
            x: `Tugas ${i + 1}`,
            y: [start, end]
        });
    }
    return data;
}

function generateRangeAreaData(count, yrange) {
    let data = [];
    let baseval = new Date('01/01/2024').getTime();
    for (let i = 0; i < count; i++) {
        let low = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        let high = low + Math.floor(Math.random() * 20) + 5;
        data.push({
            x: baseval,
            y: [low, high]
        });
        baseval += 86400000;
    }
    return data;
}

function generateSlopeData(categories, startYear, endYear, minVal, maxVal) {
    let series = [];
    categories.forEach(category => {
        const startValue = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
        const endValue = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
        series.push({
            name: category,
            data: [
                { x: startYear.toString(), y: startValue },
                { x: endYear.toString(), y: endValue }
            ]
        });
    });
    return series;
}


document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fungsi untuk merender contoh grafik Pendapatan Bulanan.
     */
    const renderContohPendapatanChart = () => {
        const chartContainer = document.querySelector("#chart-pendapatan-bulanan");

        if (!chartContainer) {
            return;
        }

        const options = {
            ...chartTheme.area,
            series: [{
                name: 'Pendapatan (Juta Rp)',
                data: [120, 155, 130, 180, 160, 210, 240, 220, 250, 280, 310, 300]
            }],
            chart: {
                ...chartTheme.area.chart,
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                ...chartTheme.area.stroke,
                curve: 'smooth',
                width: 2
            },
            xaxis: {
                ...chartTheme.area.xaxis,
                categories: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
                    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
                ],
                title: {
                    text: 'Bulan'
                }
            },
            yaxis: {
                ...chartTheme.area.yaxis,
                title: {
                    text: 'Pendapatan (Juta Rp)'
                }
            },
            tooltip: {
                ...chartTheme.area.tooltip,
                x: {
                    format: 'MMMM'
                },
                y: {
                    formatter: function (val) {
                        return "Rp " + val + " Juta"
                    }
                }
            },
            fill: {
                ...chartTheme.area.fill,
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.2,
                    stops: [0, 90, 100]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };

        const chart = new ApexCharts(chartContainer, options);

        chart.render();
    };

    const renderContohAndaChart = () => {
        const chartContainer = document.querySelector("#chart-contoh-anda");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.donut,
            series: [44, 55, 13, 33],
            labels: ['Tim A', 'Tim B', 'Tim C', 'Tim D'],
            chart: {
                ...chartTheme.donut.chart,
                type: 'donut',
                height: 250
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    },
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };

        const chart = new ApexCharts(chartContainer, options);
        chart.render();
    };

    const renderLineChartNew = () => {
        const chartContainer = document.querySelector("#lineChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.line,
            series: [{
                name: "Suhu (°C)",
                data: [25, 26, 27, 26, 28, 29, 27, 25, 26, 28, 29, 30]
            }],
            chart: {
                ...chartTheme.line.chart,
                height: 350,
                type: 'line',
            },
            xaxis: {
                ...chartTheme.line.xaxis,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                title: {
                    text: 'Bulan'
                }
            },
            yaxis: {
                ...chartTheme.line.yaxis,
                title: {
                    text: 'Suhu Rata-rata'
                }
            },
            tooltip: {
                ...chartTheme.line.tooltip,
                y: {
                    formatter: function (val) {
                        return val + " °C";
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderColumnChart = () => {
        const chartContainer = document.querySelector("#columnChart");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.bar,
            series: [{
                name: 'Penjualan',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],
            chart: {
                ...chartTheme.bar.chart,
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                ...chartTheme.bar.xaxis,
                categories: ['Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt'],
                title: {
                    text: 'Bulan'
                }
            },
            yaxis: {
                ...chartTheme.bar.yaxis,
                title: {
                    text: 'Jumlah Penjualan'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderBarChartNew = () => {
        const chartContainer = document.querySelector("#barChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.bar,
            series: [{
                name: 'Tingkat Kepuasan',
                data: [85, 90, 78, 92, 88]
            }],
            chart: {
                ...chartTheme.bar.chart,
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '70%',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                }
            },
            xaxis: {
                ...chartTheme.bar.xaxis,
                categories: ['Sangat Puas', 'Puas', 'Cukup Puas', 'Kurang Puas', 'Tidak Puas'],
                title: {
                    text: 'Tingkat Kepuasan (%)'
                }
            },
            yaxis: {
                ...chartTheme.bar.yaxis,
                title: {
                    text: 'Kategori'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderMixedChart = () => {
        const chartContainer = document.querySelector("#mixedChart");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.line,
            series: [{
                name: 'Penjualan',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 18]
            }, {
                name: 'Laba',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51]
            }],
            chart: {
                ...chartTheme.line.chart,
                height: 350,
                type: 'line',
                stacked: false,
            },
            stroke: {
                ...chartTheme.line.stroke,
                width: [0, 2]
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            fill: {
                opacity: [0.85, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003', '12/01/2003'],
            xaxis: {
                ...chartTheme.line.xaxis,
                type: 'datetime'
            },
            yaxis: {
                ...chartTheme.line.yaxis,
                title: {
                    text: 'Jumlah'
                },
                min: 0
            },
            tooltip: {
                ...chartTheme.line.tooltip,
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " unit";
                        }
                        return y;
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderRangeAreaChart = () => {
        const chartContainer = document.querySelector("#rangeAreaChart");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.area,
            series: [{
                name: 'Rentang Harga',
                data: generateRangeAreaData(30, { min: 100, max: 200 })
            }],
            chart: {
                ...chartTheme.area.chart,
                height: 350,
                type: 'rangeArea',
            },
            xaxis: {
                ...chartTheme.area.xaxis,
                type: 'datetime',
                title: {
                    text: 'Tanggal'
                }
            },
            yaxis: {
                ...chartTheme.area.yaxis,
                title: {
                    text: 'Harga'
                }
            },
            tooltip: {
                ...chartTheme.area.tooltip,
                x: {
                    format: 'dd MMM'
                },
                y: {
                    formatter: function (val) {
                        return `Min: ${val[0]}, Max: ${val[1]}`;
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderBoxPlotChartNew = () => {
        const chartContainer = document.querySelector("#boxPlotChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.boxPlot,
            series: [{
                type: 'boxPlot',
                data: generateBoxPlotData(7)
            }],
            chart: {
                ...chartTheme.boxPlot.chart,
                height: 350,
                type: 'boxPlot',
            },
            xaxis: {
                ...chartTheme.boxPlot.xaxis,
                categories: ['Grup A', 'Grup B', 'Grup C', 'Grup D', 'Grup E', 'Grup F', 'Grup G'],
                title: {
                    text: 'Grup Data'
                }
            },
            yaxis: {
                ...chartTheme.boxPlot.yaxis,
                title: {
                    text: 'Nilai'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

     const renderBubbleChartNew = () => {
        const chartContainer = document.querySelector("#bubbleChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.bubble,
            series: [{
                name: 'Departemen 1',
                data: generateBubbleData(8, 50, 150)
            }, {
                name: 'Departemen 2',
                data: generateBubbleData(8, 60, 160)
            }, {
                name: 'Departemen 3',
                data: generateBubbleData(8, 70, 170)
            }],
            chart: {
                ...chartTheme.bubble.chart,
                height: 350,
                type: 'bubble',
            },
            xaxis: {
                ...chartTheme.bubble.xaxis,
                tickAmount: 10,
                labels: {
                    formatter: function(val) {
                        return parseFloat(val).toFixed(0) + ' Jam Kerja';
                    }
                },
                title: {
                    text: 'Jam Kerja Mingguan'
                }
            },
            yaxis: {
                ...chartTheme.bubble.yaxis,
                labels: {
                    formatter: function(val) {
                        return parseFloat(val).toFixed(0) + ' Poin';
                    }
                },
                title: {
                    text: 'Poin Kinerja'
                }
            },
            tooltip: {
                ...chartTheme.bubble.tooltip,
                y: {
                    formatter: function (val) {
                        return val + " Poin";
                    }
                },
                z: {
                    formatter: function (val) {
                        return val + " Tugas Selesai";
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderScatterChartNew = () => {
        const chartContainer = document.querySelector("#scatterChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.scatter,
            series: [{
                name: "Data Set A",
                data: [[5.4, 170], [6.2, 175], [7.1, 180], [8.0, 185], [8.9, 190], [9.8, 195], [10.7, 200], [11.6, 205], [12.5, 210]]
            }, {
                name: "Data Set B",
                data: [[5.0, 160], [5.8, 165], [6.7, 170], [7.6, 175], [8.5, 180], [9.4, 185], [10.3, 190], [11.2, 195], [12.1, 200]]
            }],
            chart: {
                ...chartTheme.scatter.chart,
                height: 350,
                type: 'scatter',
            },
            xaxis: {
                ...chartTheme.scatter.xaxis,
                tickAmount: 10,
                labels: {
                    formatter: function(val) {
                        return parseFloat(val).toFixed(1) + ' X';
                    }
                },
                title: {
                    text: 'Variabel X'
                }
            },
            yaxis: {
                ...chartTheme.scatter.yaxis,
                labels: {
                    formatter: function(val) {
                        return parseFloat(val).toFixed(0) + ' Y';
                    }
                },
                title: {
                    text: 'Variabel Y'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderHeatmapChartNew = () => {
        const chartContainer = document.querySelector("#heatmapChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.heatmap,
            series: [{
                name: 'Pagi',
                data: generateData(12, { min: 0, max: 100 })
            }, {
                name: 'Siang',
                data: generateData(12, { min: 0, max: 100 })
            }, {
                name: 'Sore',
                data: generateData(12, { min: 0, max: 100 })
            }, {
                name: 'Malam',
                data: generateData(12, { min: 0, max: 100 })
            }],
            chart: {
                ...chartTheme.heatmap.chart,
                height: 350,
                type: 'heatmap',
            },
            xaxis: {
                ...chartTheme.heatmap.xaxis,
                categories: Array.from({length: 12}, (_, i) => `${i + 1} Jam`),
                title: {
                    text: 'Waktu (Jam)'
                }
            },
            yaxis: {
                ...chartTheme.heatmap.yaxis,
                title: {
                    text: 'Bagian Hari'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderTreemapChartNew = () => {
        const chartContainer = document.querySelector("#treemapChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.treemap,
            series: [{
                data: [{
                    x: 'Dokumen',
                    y: 400
                }, {
                    x: 'Gambar',
                    y: 300
                }, {
                    x: 'Video',
                    y: 250
                }, {
                    x: 'Audio',
                    y: 150
                }, {
                    x: 'Aplikasi',
                    y: 100
                }, {
                    x: 'Lainnya',
                    y: 50
                }]
            }],
            chart: {
                ...chartTheme.treemap.chart,
                height: 350,
                type: 'treemap',
            },
            title: {
                text: 'Ukuran File Berdasarkan Kategori',
                align: 'center',
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#373d3f'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderSlopeChart = () => {
        const chartContainer = document.querySelector("#slopeChart");
        if (!chartContainer) return;

        const categories = ['Produk A', 'Produk B', 'Produk C', 'Produk D', 'Produk E'];
        const startYear = 2023;
        const endYear = 2024;
        const seriesData = generateSlopeData(categories, startYear, endYear, 1, 10);

        const options = {
            ...chartTheme.line,
            series: seriesData,
            chart: {
                ...chartTheme.line.chart,
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            stroke: {
                ...chartTheme.line.stroke,
                curve: 'straight',
                width: 3
            },
            markers: {
                ...chartTheme.line.markers,
                size: 6,
                strokeWidth: 2,
                hover: {
                    sizeOffset: 4
                }
            },
            xaxis: {
                ...chartTheme.line.xaxis,
                type: 'category',
                categories: [startYear.toString(), endYear.toString()],
                labels: {
                    formatter: function(val) {
                        return val;
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                ...chartTheme.line.yaxis,
                reversed: true,
                min: 1,
                max: 10,
                tickAmount: 9,
                labels: {
                    formatter: function(val) {
                        return `Peringkat ${Math.round(val)}`;
                    }
                }
            },
            grid: {
                ...chartTheme.line.grid,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            tooltip: {
                ...chartTheme.line.tooltip,
                shared: false,
                intersect: true,
                x: {
                    show: false
                },
                y: {
                    formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                        const category = w.config.series[seriesIndex].name;
                        const year = w.config.xaxis.categories[dataPointIndex];
                        return `${category}: Peringkat ${Math.round(val)} pada ${year}`;
                    }
                }
            },
            legend: {
                ...chartTheme.line.legend,
                position: 'right',
                offsetY: 40
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderRadialBarChartNew = () => {
        const chartContainer = document.querySelector("#radialBarChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.radialBar,
            series: [85, 70, 60, 95],
            labels: ['Desain', 'Pengembangan', 'Pengujian', 'Implementasi'],
            chart: {
                ...chartTheme.radialBar.chart,
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    ...chartTheme.radialBar.plotOptions.radialBar,
                    hollow: {
                        size: '50%',
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '16px',
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            formatter: function (val) {
                                return val + '%';
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) / w.globals.series.length + '%';
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderRadarChartNew = () => {
        const chartContainer = document.querySelector("#radarChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.radar,
            series: [{
                name: 'Pemain A',
                data: [70, 80, 65, 90, 75, 85],
            }, {
                name: 'Pemain B',
                data: [60, 75, 80, 70, 85, 90],
            }],
            chart: {
                ...chartTheme.radar.chart,
                height: 350,
                type: 'radar',
            },
            xaxis: {
                categories: ['Kecepatan', 'Kekuatan', 'Ketahanan', 'Agility', 'Akurasi', 'Kerja Sama'],
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    formatter: function(val) {
                        return val.toFixed(0);
                    }
                }
            },
            fill: {
                opacity: 0.2
            },
            stroke: {
                width: 2
            },
            markers: {
                size: 4
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    const renderPolarAreaChartNew = () => {
        const chartContainer = document.querySelector("#polarAreaChartNew");
        if (!chartContainer) return;

        const options = {
            ...chartTheme.polarArea,
            series: [42, 30, 15, 8, 5],
            labels: ['Elektronik', 'Pakaian', 'Makanan', 'Otomotif', 'Lainnya'],
            chart: {
                ...chartTheme.polarArea.chart,
                height: 350,
                type: 'polarArea',
            },
            stroke: {
                colors: ['#fff']
            },
            fill: {
                opacity: 0.8
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    },
                    chart: {
                        toolbar: {
                            show: true
                        }
                    }
                }
            }]
        };
        new ApexCharts(chartContainer, options).render();
    };

    renderContohPendapatanChart();
    renderContohAndaChart();
    renderLineChartNew();
    renderColumnChart();
    renderBarChartNew();
    renderMixedChart();
    renderRangeAreaChart();
    renderBoxPlotChartNew();
    renderBubbleChartNew();
    renderScatterChartNew();
    renderHeatmapChartNew();
    renderTreemapChartNew();
    renderSlopeChart();
    renderRadialBarChartNew();
    renderRadarChartNew();
    renderPolarAreaChartNew();

});