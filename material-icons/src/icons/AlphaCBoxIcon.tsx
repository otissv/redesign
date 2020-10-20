import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaCBoxIcon: FC<IconInterface> = function AlphaCBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaCBoxIcon ${className}`;
      return (
        <Icon alt="AlphaCBox" className={classNames} {...propsRest}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V14H13V15H11V9H13V10H15V9A2,2 0 0,0 13,7H11Z" />

        </Icon>
      );
    };
    AlphaCBoxIcon.displayName = 'AlphaCBoxIcon';
      