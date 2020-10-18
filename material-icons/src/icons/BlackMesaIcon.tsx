import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BlackMesaIcon: FC<IconInterface> = function BlackMesaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BlackMesaIcon ${className}`;
      return (
        <Icon alt="BlackMesa" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.39 5.05,16.53 6.71,18H9V12H17L19.15,15.59C19.69,14.5 20,13.29 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    BlackMesaIcon.displayName = 'BlackMesaIcon';
      