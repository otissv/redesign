import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoonLastQuarterIcon: FC<IconInterface> = function MoonLastQuarterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonLastQuarterIcon ${className}`;
      return (
        <Icon alt="MoonLastQuarter" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 0 0 12 22Z" />

        </Icon>
      );
    };
    MoonLastQuarterIcon.displayName = 'MoonLastQuarterIcon';
      