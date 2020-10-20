import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric1Icon: FC<IconInterface> = function Numeric1Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric1Icon ${className}`;
      return (
        <Icon alt="Numeric1" className={classNames} {...propsRest}>
          <path d="M10,7V9H12V17H14V7H10Z" />

        </Icon>
      );
    };
    Numeric1Icon.displayName = 'Numeric1Icon';
      