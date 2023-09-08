import { Col, Row } from 'antd';
import { ReactElement } from 'react';
import { Coffee } from '../constants/index';
import { CoffeeCard } from './CoffeeCard/CoffeeCard';

type CoffeeListProps = {
  list: Coffee[];
  extra?: ReactElement;
  onCardClick?: Function;
}

export const CoffeeList = ({ list, extra, onCardClick }: CoffeeListProps) => (
  <Row gutter={[16, 24]} align="middle">
    {list.map((coffeeItem) => (
      <Col key={coffeeItem.uid} lg={4} md={8} sm={12} xs={12}>
        <CoffeeCard
          onClick={onCardClick}
          coffeeItem={coffeeItem}
        />
      </Col>
    ))}
    {extra && <Col>{extra}</Col>}
  </Row>
);
