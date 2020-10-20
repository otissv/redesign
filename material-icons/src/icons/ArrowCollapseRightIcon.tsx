import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowCollapseRightIcon: FC<IconInterface> = function ArrowCollapseRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseRightIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseRight" className={classNames} {...propsRest}>
          <path d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z" />

        </Icon>
      );
    };
    ArrowCollapseRightIcon.displayName = 'ArrowCollapseRightIcon';
      