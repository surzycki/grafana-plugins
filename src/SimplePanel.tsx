import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import Form from 'rcl/components/Molecules/Form';
//import lander from 'assets/images/nova-c.jpg';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    const { options, data, width, height } = this.props;

    return (
      <div
        style={{
          position: 'relative',
          width,
          height,
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
        >
          <g>
            <circle style={{ fill: '#FF00FF' }} r={160} />
          </g>
        </svg>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: '10px',
          }}
        >
          <div>Count: {data.series.length}</div>
          <div>{options.text}</div>
          <Form />
          <img src="assets/images/nova-c.jpg" />
        </div>
      </div>
    );
  }
}
