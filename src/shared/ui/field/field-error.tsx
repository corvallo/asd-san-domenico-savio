'use client';

import { useMemo } from 'react';
import type { FieldErrorProps } from './field.types';
import { fieldStyles } from './field-style';

export const FieldError = ({ className, children, errors, ...props }: FieldErrorProps) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className={fieldStyles().errorList()}>
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div role='alert' data-slot='field-error' className={fieldStyles().error({ className })} {...props}>
      {content}
    </div>
  );
};
