import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PowerPlugIcon: FC<IconInterface> = function PowerPlugIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerPlugIcon ${className}`;
      return (
        <Icon alt="PowerPlug" className={classNames} {...propsRest}>
          <path d="M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z" />

        </Icon>
      );
    };
    PowerPlugIcon.displayName = 'PowerPlugIcon';
      