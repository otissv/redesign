import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowSplitVerticalIcon: FC<IconInterface> = function ArrowSplitVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowSplitVerticalIcon ${className}`;
      return (
        <Icon alt="ArrowSplitVertical" className={classNames} {...propsRest}>
          <path d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z" />

        </Icon>
      );
    };
    ArrowSplitVerticalIcon.displayName = 'ArrowSplitVerticalIcon';
      