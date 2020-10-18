import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CurrentDcIcon: FC<IconInterface> = function CurrentDcIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CurrentDcIcon ${className}`;
      return (
        <Icon alt="CurrentDc" className={classNames} {...propsRest}>
          <path d="M2,9V11H22V9H2M2,13V15H7V13H2M9,13V15H15V13H9M17,13V15H22V13H17Z" />

        </Icon>
      );
    };
    CurrentDcIcon.displayName = 'CurrentDcIcon';
      