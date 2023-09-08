import { Coffee } from '@/entities/Coffee/constants';
import { fetchCoffee, fetchLatestCoffee } from '@/entities/Coffee/lib/api';
import { CoffeeList } from '@/entities/Coffee/ui/CoffeeList';
import { AddNewCoffee } from '@/features/Coffee/AddNewCoffee/AddNewCoffee';
import { ShowCoffeeDetails } from '@/features/Coffee/ShowCoffeeDetails/ShowCoffeeDetails';
import { LoadingState } from '@/shared/constants';
import { Spin } from 'antd';
import { useCallback, useEffect, useState } from 'react';

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(LoadingState.Idle);
  const [list, setList] = useState<Coffee[]>([]);
  const [selectedCard, setSelectedCard] = useState<Coffee>(null);

  useEffect(() => {
    const init = async () => {
      setIsLoading(LoadingState.Loading);
      const getLastCoffee = await fetchLatestCoffee();
      setList(((prevState) => [...prevState, getLastCoffee]));
      setIsLoading(LoadingState.Success);
    };
    init();
  }, []);

  const handleCardClick = useCallback(async (id: string) => {
    const coffeeDetails = await fetchCoffee(id);
    setSelectedCard(coffeeDetails);
  }, []);

  if (isLoading === LoadingState.Loading) {
    return <Spin />;
  }

  return (
    <>
      <CoffeeList
        list={list}
        extra={<AddNewCoffee onAdd={setList} />}
        onCardClick={handleCardClick}
      />

      {selectedCard && (
        <ShowCoffeeDetails
          coffee={selectedCard}
          isVisible={!!selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
};

export default IndexPage;
