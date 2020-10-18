import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PoloIcon: FC<IconInterface> = function PoloIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PoloIcon ${className}`;
      return (
        <Icon alt="Polo" className={classNames} {...propsRest}>
          <path d="M22 9.5C22 10.88 20.88 12 19.5 12S17 10.88 17 9.5 18.12 7 19.5 7 22 8.12 22 9.5M11 17V3H8V17H2L6 21H13V17H11M16 17H14V21H16V17Z" />

        </Icon>
      );
    };
    PoloIcon.displayName = 'PoloIcon';
      