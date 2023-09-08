import styles from './CoffeeNotes.module.scss';

type CoffeeNotesProps = {
  notes: string;
}

export const CoffeeNotes = ({ notes }: CoffeeNotesProps) => {
  const notesArr = notes.split(',');

  return (
    <div className={styles.root}>
      {notesArr.map((note, i) => <span key={`${note}-${i}`} className={styles.note}>{note}</span>)}
    </div>
  );
};
