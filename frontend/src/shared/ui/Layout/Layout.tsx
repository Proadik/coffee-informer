import { UIContent } from '@/shared/ui/UIContent/UIContent';
import { UIHeader } from '@/shared/ui/UIHeader/UIHeader';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: {
  children: ReactNode;
}) => (
  <div className={styles.root}>
    <UIHeader />
    <UIContent>{children}</UIContent>
  </div>
);
