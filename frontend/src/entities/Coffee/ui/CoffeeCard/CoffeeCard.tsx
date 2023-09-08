import { CoffeeNotes } from '@/entities/Coffee/ui/CoffeeNotes/CoffeeNotes';
import Image from 'next/image';
import { Coffee } from '../../constants/index';
import styles from './CoffeeCard.module.scss';

type CoffeeCardProps = {
  coffeeItem: Coffee;
  onClick: Function;
}

export const CoffeeCard = ({ coffeeItem, onClick }: CoffeeCardProps) => (
  <div className={styles.root} onClick={() => onClick(coffeeItem.uid)}>
    <div className={styles.image}>
      <Image
        fill
        src={coffeeItem.image}
        alt={coffeeItem.blend_name}
        loading="lazy"
        quality={100}
        placeholder="blur"
        objectFit="cover"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEXUExURZmmIJKeG4mVE4KNDoWQGHqDEHuEFnuCHHJ4GGlvFJaiHo2ZGISQD32IDIONFnV/DHV9EnZ+F250FWdtEpKeHYyYGYOOEnyHDX2HEm53B211CnB4E2ZsDWJoDYuYG4OQFXqHD3eDDXF8DWx3C2lzC2lzDWlyEWNrEIqWHoGOGHmFEnWAD296DWt1DmlyD2lxE2RsEYWRHX6JGHeCE3N+Emx2D2p0D2hxDGhxEGhwEn6JHHmEGHN+FHJ9E2pzEWhxDmdvD2FoD3aDG3N/F3F9FW15E2x4FGp1FGdzEWVwEWBrDlxmDG97Fmp1EmdzD2h0E2dyE2RuEmBqEFxlDmh0EWZxEGVwD2RvEGNtEWNtE19pEV1mEf///57MxkwAAAABYktHRFzq2ACXAAAAB3RJTUUH5wkHDzAWd5wfzQAAAAFvck5UAc+id5oAAAB2SURBVAjXY2BgZGJmYWVj5+Bk4OLm4eXjFxAUEmYQERUTl5CUkpaRZZCTV1BUUlZRVVNn0NDU0tbRVdXTN2AwNDI2MTUzt7BUZ7CytrE1s7N3MHBkcHJ2cXVz9/D08mbwcfP18w/wDAwKZggJDQsLD4yIjIoGAKjOEkM1PiaFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTA3VDE1OjQ4OjEzKzAwOjAwyDLVCgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0wN1QxNTo0ODoxMyswMDowMLlvbbYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMDdUMTU6NDg6MjIrMDA6MDDGgkA+AAAAAElFTkSuQmCC"
      />
    </div>
    <div className={styles.info}>
      <p className={styles.origin}>{coffeeItem.origin}</p>
      <p className={styles.blend}>{coffeeItem.blend_name}</p>
      <p className={styles.variety}>{coffeeItem.variety}</p>
      <CoffeeNotes notes={coffeeItem.notes} />
    </div>
  </div>
);
