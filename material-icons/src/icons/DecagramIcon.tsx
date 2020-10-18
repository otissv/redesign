import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DecagramIcon: FC<IconInterface> = function DecagramIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DecagramIcon ${className}`;
      return (
        <Icon alt="Decagram" className={classNames} {...propsRest}>
          <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12Z" />

        </Icon>
      );
    };
    DecagramIcon.displayName = 'DecagramIcon';
      