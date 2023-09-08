import { Layout as AntLayout } from 'antd';
import { ReactNode } from 'react';
import styles from './UIContent.module.scss';

const { Content } = AntLayout;

export const UIContent = ({ children }: {
  children: ReactNode;
}) => (
  <Content className={styles.root}>
    {children}
  </Content>
);
