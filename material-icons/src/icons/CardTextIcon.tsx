import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CardTextIcon: FC<IconInterface> = function CardTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardTextIcon ${className}`;
      return (
        <Icon alt="CardText" className={classNames} {...propsRest}>
          <path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M5,13V15H16V13H5M5,9V11H19V9H5Z" />

        </Icon>
      );
    };
    CardTextIcon.displayName = 'CardTextIcon';
      