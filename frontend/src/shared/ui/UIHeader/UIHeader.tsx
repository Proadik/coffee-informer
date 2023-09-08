import { CoffeeOutlined } from '@ant-design/icons';
import { Layout as AntLayout } from 'antd';
import styles from './UIHeader.module.scss';

const { Header } = AntLayout;

export const UIHeader = () => (
  <Header className={styles.root}>
    <h1 className={styles.logo}>
      <CoffeeOutlined />
      Coffee Informer
    </h1>
  </Header>
);
