import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Brightness1Icon: FC<IconInterface> = function Brightness1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Brightness1Icon ${className}`;
      return (
        <Icon alt="Brightness1" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    Brightness1Icon.displayName = 'Brightness1Icon';
      