import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CurrencyNgnIcon: FC<IconInterface> = function CurrencyNgnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrencyNgnIcon ${className}`;
      return (
        <Icon alt="CurrencyNgn" className={classNames} {...propsRest}>
          <path d="M4,9H6V3H8L11.42,9H16V3H18V9H20V11H18V13H20V15H18V21H16L12.57,15H8V21H6V15H4V13H6V11H4V9M8,9H9.13L8,7.03V9M8,11V13H11.42L10.28,11H8M16,17V15H14.85L16,17M12.56,11L13.71,13H16V11H12.56Z" />

        </Icon>
      );
    };
    CurrencyNgnIcon.displayName = 'CurrencyNgnIcon';
      