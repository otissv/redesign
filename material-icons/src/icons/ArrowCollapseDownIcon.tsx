import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowCollapseDownIcon: FC<IconInterface> = function ArrowCollapseDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseDownIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseDown" className={classNames} {...propsRest}>
          <path d="M19.92,12.08L12,20L4.08,12.08L5.5,10.67L11,16.17V2H13V16.17L18.5,10.66L19.92,12.08M12,20H2V22H22V20H12Z" />

        </Icon>
      );
    };
    ArrowCollapseDownIcon.displayName = 'ArrowCollapseDownIcon';
      