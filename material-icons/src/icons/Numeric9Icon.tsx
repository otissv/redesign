import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const Numeric9Icon: FC<IconInterface> = function Numeric9Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9Icon ${className}`;
      return (
        <Icon alt="Numeric9" className={classNames} {...propsRest}>
          <path d="M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z" />

        </Icon>
      );
    };
    Numeric9Icon.displayName = 'Numeric9Icon';
      