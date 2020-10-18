import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowCollapseHorizontalIcon: FC<IconInterface> = function ArrowCollapseHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseHorizontalIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseHorizontal" className={classNames} {...propsRest}>
          <path d="M13,20V4H15.03V20H13M10,20V4H12.03V20H10M5,8L9.03,12L5,16V13H2V11H5V8M20,16L16,12L20,8V11H23V13H20V16Z" />

        </Icon>
      );
    };
    ArrowCollapseHorizontalIcon.displayName = 'ArrowCollapseHorizontalIcon';
      