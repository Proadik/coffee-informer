import { fetchNewCoffee } from '@/entities/Coffee/lib/api';
import { Timer } from '@/features/Coffee/AddNewCoffee/TImer';
import { LoadingState } from '@/shared/constants';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { DateTime } from 'luxon';
import { useCallback, useState } from 'react';

type AddNewCoffeeProps = {
  onAdd: Function;
}

export const AddNewCoffee = ({ onAdd }: AddNewCoffeeProps) => {
  const [innerTimer, setInnerTimer] = useState(DateTime.now().plus({ seconds: 31 }).toMillis());
  const [isLoading, setIsLoading] = useState(LoadingState.Idle);

  const handleAdd = useCallback(async () => {
    setIsLoading(LoadingState.Loading);
    const newCoffee = await fetchNewCoffee();
    onAdd((prevState: any) => [...prevState, newCoffee]);
    setInnerTimer(DateTime.now().plus({ seconds: 31 }).toMillis());
    setIsLoading(LoadingState.Success);
  }, [onAdd]);

  return (
    <Space direction="vertical" size={15} style={{ textAlign: 'center' }}>
      <Timer millis={innerTimer} onFinish={handleAdd} />
      <Button
        size="large"
        shape="circle"
        type="primary"
        onClick={handleAdd}
        icon={<PlusOutlined />}
        loading={isLoading === LoadingState.Loading}
      />
    </Space>
  );
};
