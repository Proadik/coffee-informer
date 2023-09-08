import { Statistic } from 'antd';

type TimerProps = {
  millis: number;
  onFinish: Function;
}

export const Timer = ({ millis, onFinish }: TimerProps) => (
  <Statistic.Countdown
    className="auto-fetch-timer"
    title="Auto fetch in:"
    value={millis}
    onFinish={onFinish}
  />
);
