import { Coffee } from '@/entities/Coffee/constants';
import { CoffeeNotes } from '@/entities/Coffee/ui/CoffeeNotes/CoffeeNotes';
import { Descriptions, Modal } from 'antd';
import Image from 'next/image';

type ShowCoffeeDetailsProps = {
  coffee: Coffee;
  isVisible: boolean;
  onClose: Function;
}

export const ShowCoffeeDetails = ({ coffee, isVisible, onClose }: ShowCoffeeDetailsProps) => {
  const transformCoffee = [
    {
      key: 1,
      label: <strong>Origin</strong>,
      children: <>{`- ${coffee.origin}`}</>,
    },
    {
      key: 2,
      label: <strong>Variety</strong>,
      children: <>{`- ${coffee.variety}`}</>,
    },
    {
      key: 3,
      label: <strong>Blend</strong>,
      children: <>{`- ${coffee.blend_name}`}</>,
    },
    {
      key: 4,
      label: <strong>Intensifier</strong>,
      children: <>{`- ${coffee.intensifier}`}</>,
    },
    {
      key: 5,
      label: <strong>Notes</strong>,
      children: <CoffeeNotes notes={coffee.notes} />,
    },
  ];

  return (
    <Modal
      visible={isVisible}
      footer={null}
      onCancel={onClose}
      width={700}
      title="Coffee Details"
    >
      <Image
        style={{ marginTop: '10px', objectFit: 'contain' }}
        width={650}
        height={500}
        src={coffee.image}
        alt={coffee.blend_name}
        loading="lazy"
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEXUExURZmmIJKeG4mVE4KNDoWQGHqDEHuEFnuCHHJ4GGlvFJaiHo2ZGISQD32IDIONFnV/DHV9EnZ+F250FWdtEpKeHYyYGYOOEnyHDX2HEm53B211CnB4E2ZsDWJoDYuYG4OQFXqHD3eDDXF8DWx3C2lzC2lzDWlyEWNrEIqWHoGOGHmFEnWAD296DWt1DmlyD2lxE2RsEYWRHX6JGHeCE3N+Emx2D2p0D2hxDGhxEGhwEn6JHHmEGHN+FHJ9E2pzEWhxDmdvD2FoD3aDG3N/F3F9FW15E2x4FGp1FGdzEWVwEWBrDlxmDG97Fmp1EmdzD2h0E2dyE2RuEmBqEFxlDmh0EWZxEGVwD2RvEGNtEWNtE19pEV1mEf///57MxkwAAAABYktHRFzq2ACXAAAAB3RJTUUH5wkHDzAWd5wfzQAAAAFvck5UAc+id5oAAAB2SURBVAjXY2BgZGJmYWVj5+Bk4OLm4eXjFxAUEmYQERUTl5CUkpaRZZCTV1BUUlZRVVNn0NDU0tbRVdXTN2AwNDI2MTUzt7BUZ7CytrE1s7N3MHBkcHJ2cXVz9/D08mbwcfP18w/wDAwKZggJDQsLD4yIjIoGAKjOEkM1PiaFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTA3VDE1OjQ4OjEzKzAwOjAwyDLVCgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0wN1QxNTo0ODoxMyswMDowMLlvbbYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMDdUMTU6NDg6MjIrMDA6MDDGgkA+AAAAAElFTkSuQmCC"
      />
      <Descriptions
        layout="vertical"
        bordered
        items={transformCoffee}
        style={{ marginTop: '15px' }}
      />
    </Modal>
  );
};
