import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowCollapseLeftIcon: FC<IconInterface> = function ArrowCollapseLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseLeftIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseLeft" className={classNames} {...propsRest}>
          <path d="M11.92,19.92L4,12L11.92,4.08L13.33,5.5L7.83,11H22V13H7.83L13.34,18.5L11.92,19.92M4,12V2H2V22H4V12Z" />

        </Icon>
      );
    };
    ArrowCollapseLeftIcon.displayName = 'ArrowCollapseLeftIcon';
      