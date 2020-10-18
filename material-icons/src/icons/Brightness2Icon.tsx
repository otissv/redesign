import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Brightness2Icon: FC<IconInterface> = function Brightness2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Brightness2Icon ${className}`;
      return (
        <Icon alt="Brightness2" className={classNames} {...propsRest}>
          <path d="M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z" />

        </Icon>
      );
    };
    Brightness2Icon.displayName = 'Brightness2Icon';
      