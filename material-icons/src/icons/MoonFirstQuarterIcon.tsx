import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MoonFirstQuarterIcon: FC<IconInterface> = function MoonFirstQuarterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoonFirstQuarterIcon ${className}`;
      return (
        <Icon alt="MoonFirstQuarter" className={classNames} {...propsRest}>
          <path d="M12 2V22A10 10 0 0 0 12 2Z" />

        </Icon>
      );
    };
    MoonFirstQuarterIcon.displayName = 'MoonFirstQuarterIcon';
      