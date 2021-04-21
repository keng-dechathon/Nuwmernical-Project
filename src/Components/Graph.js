import React, { Component } from 'react'
import { range, compile } from 'mathjs';
import Plot from 'react-plotly.js';

export default class Graph extends Component {
    render() {
        let { fx, title } = this.props;
        let config = {responsive: true,scrollZoom:false, useResizeHandler:true}
        return (            
            <Plot
                data={[
                    {
                        x: range(-10, 10, 0.1).toArray(),
                        y: range(-10, 10, 0.1).toArray().map(function (x) {                           
                            return compile(fx).evaluate({ x:x })
                        }),
                        type: 'scatter',
                        marker: { color: 'red' },
                    },
                ]}
                layout={{ title: title ,  dragmode: 'pan',xaxis: { fixedrange: true },yaxis: { fixedrange: true }}}
                config={config}                
               
            />
        )
    }
}

