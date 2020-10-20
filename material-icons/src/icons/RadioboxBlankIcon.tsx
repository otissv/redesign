import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RadioboxBlankIcon: FC<IconInterface> = function RadioboxBlankIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RadioboxBlankIcon ${className}`;
      return (
        <Icon alt="RadioboxBlank" className={classNames} {...propsRest}>
          <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    RadioboxBlankIcon.displayName = 'RadioboxBlankIcon';
      