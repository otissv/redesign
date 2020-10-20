import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaSIcon: FC<IconInterface> = function AlphaSIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaSIcon ${className}`;
      return (
        <Icon alt="AlphaS" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11Z" />

        </Icon>
      );
    };
    AlphaSIcon.displayName = 'AlphaSIcon';
      