import { fetchNewCoffee } from '@/entities/Coffee/lib/api';
import { LoadingState } from '@/shared/constants';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Statistic, Tooltip } from 'antd';
import { DateTime } from 'luxon';
import { useCallback, useState } from 'react';

type AddNewCoffeeProps = {
  onAdd: Function;
}

export const AddNewCoffee = ({ onAdd }: AddNewCoffeeProps) => {
  const [autoFetchTimer, setAutoFetchTimer] = useState(DateTime.now().plus({ second: 30 }));
  const [isLoading, setIsLoading] = useState(LoadingState.Idle);

  const handleAdd = useCallback(async () => {
    setIsLoading(LoadingState.Loading);
    const newCoffee = await fetchNewCoffee();
    onAdd((prevState: any) => [...prevState, newCoffee]);
    setIsLoading(LoadingState.Success);
    setAutoFetchTimer(DateTime.now().plus({ second: 30 }));
  }, [onAdd]);

  return (
    <Tooltip
      title={(
        <Statistic.Countdown
          className="auto-fetch-timer"
          title="Auto fetch in:"
          onFinish={handleAdd}
          value={autoFetchTimer.toMillis()}
        />
      )}
      placement="right"
    >
      <Button
        size="large"
        shape="circle"
        type="primary"
        onClick={handleAdd}
        icon={<PlusOutlined />}
        loading={isLoading === LoadingState.Loading}
      />
    </Tooltip>
  );
};
