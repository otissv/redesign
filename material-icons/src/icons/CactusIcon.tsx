import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CactusIcon: FC<IconInterface> = function CactusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CactusIcon ${className}`;
      return (
        <Icon alt="Cactus" className={classNames} {...propsRest}>
          <path d="M14,16V21H10V18H9A3,3 0 0,1 6,15V12A1,1 0 0,1 7,11A1,1 0 0,1 8,12V15C8,15.56 8.45,16 9,16H10V6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V14H15A1,1 0 0,0 16,13V11A1,1 0 0,1 17,10A1,1 0 0,1 18,11V13A3,3 0 0,1 15,16H14Z" />

        </Icon>
      );
    };
    CactusIcon.displayName = 'CactusIcon';
      