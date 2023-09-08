import { Coffee } from '@/entities/Coffee/constants';
import { fetchLatestCoffee } from '@/entities/Coffee/lib/api';
import { CoffeeList } from '@/entities/Coffee/ui/CoffeeList';
import { AddNewCoffee } from '@/features/Coffee/AddNewCoffee/AddNewCoffee';
import { LoadingState } from '@/shared/constants';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(LoadingState.Idle);
  const [list, setList] = useState<Coffee[]>([]);

  useEffect(() => {
    const init = async () => {
      setIsLoading(LoadingState.Loading);
      const getLastCoffee = await fetchLatestCoffee();
      setList(((prevState) => [...prevState, getLastCoffee]));
      setIsLoading(LoadingState.Success);
    };
    init();
  }, []);

  if (isLoading === LoadingState.Loading) {
    return <Spin />;
  }

  return (
    <CoffeeList
      list={list}
      extra={<AddNewCoffee onAdd={setList} />}
    />
  );
};

export default IndexPage;
