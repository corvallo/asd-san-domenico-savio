import { Button, Input } from '~/shared/ui';
import { contactRequestFormStyles } from './contact-request-form.style';

const fields = [
  { name: 'name', label: 'Nome e cognome', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Telefono', type: 'tel', autoComplete: 'tel' },
  { name: 'message', label: 'Messaggio', type: 'text', autoComplete: 'off' },
] as const;

/** Trial-lesson request form. Visual only: submission is not wired yet. */
export const ContactRequestForm = ({ submitLabel }: { submitLabel: string }) => {
  const styles = contactRequestFormStyles();

  return (
    <form aria-label='Richiesta lezione di prova' className={styles.root()}>
      {fields.map((field) => (
        <label key={field.name} className={styles.label()}>
          {field.label}
          <Input name={field.name} type={field.type} autoComplete={field.autoComplete} className={styles.input()} />
        </label>
      ))}
      <Button type='submit' size='hero' className={styles.submit()}>
        {submitLabel}
      </Button>
    </form>
  );
};
