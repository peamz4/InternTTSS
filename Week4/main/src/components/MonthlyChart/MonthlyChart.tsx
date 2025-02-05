import React from 'react';
import { Card, Title, Text, Grid, Paper, Col } from '@mantine/core';
import { BarChart } from '@mantine/charts'; // Use the BarChart component from Mantine

const MonthlyChart = () => {
  const data = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 75 },
    { month: 'Jul', value: 80 },
    { month: 'Aug', value: 90 },
    { month: 'Sep', value: 95 },
    { month: 'Oct', value: 100 },
    { month: 'Nov', value: 110 },
    { month: 'Dec', value: 120 },
  ];

  const chartData = data.map(item => ({
    label: item.month,
    value: item.value,
  }));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2}>Monthly Data Chart</Title>
      <Text size="sm" color="dimmed">
        Here's a mockup of your monthly data, visualized in a bar chart.
      </Text>

      <Grid gutter="lg" mt="md">
        <Col span={12}>
          <Paper shadow="xs" padding="lg">
            <BarChart
              data={chartData}
              height={300}
              margin={{ top: 20, right: 20, bottom: 60, left: 40 }}
              xKey="label"
              yKey="value"
              yAxisLabel="Value"
              xAxisLabel="Month"
              colors={['#ff7f50']}
            />
          </Paper>
        </Col>
      </Grid>
    </Card>
  );
};

export default MonthlyChart;
