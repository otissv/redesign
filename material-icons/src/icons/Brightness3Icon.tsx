import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Brightness3Icon: FC<IconInterface> = function Brightness3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Brightness3Icon ${className}`;
      return (
        <Icon alt="Brightness3" className={classNames} {...propsRest}>
          <path d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z" />

        </Icon>
      );
    };
    Brightness3Icon.displayName = 'Brightness3Icon';
      