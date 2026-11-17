'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { SelectScrollUpButton } from './select-scroll-up-button';
import { SelectScrollDownButton } from './select-scroll-down-button';
import type { SelectContentProps } from './select.types';
import { selectStyles } from './select-style';

export const SelectContent = ({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className={selectStyles().positioner()}
      >
        <SelectPrimitive.Popup
          data-slot='select-content'
          data-align-trigger={alignItemWithTrigger}
          className={(state) =>
            selectStyles().content({ className: typeof className === 'function' ? className(state) : className })
          }
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};
