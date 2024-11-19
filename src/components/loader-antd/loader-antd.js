import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const LoaderAntd = () => (
  <Flex align="center" gap="middle">
    <Spin
      className="spinner"
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  </Flex>
);

export default LoaderAntd;
