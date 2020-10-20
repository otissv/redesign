import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowExpandHorizontalIcon: FC<IconInterface> = function ArrowExpandHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandHorizontalIcon ${className}`;
      return (
        <Icon alt="ArrowExpandHorizontal" className={classNames} {...propsRest}>
          <path d="M9,11H15V8L19,12L15,16V13H9V16L5,12L9,8V11M2,20V4H4V20H2M20,20V4H22V20H20Z" />

        </Icon>
      );
    };
    ArrowExpandHorizontalIcon.displayName = 'ArrowExpandHorizontalIcon';
      