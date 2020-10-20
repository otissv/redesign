import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextdirectionRToLIcon: FC<IconInterface> = function FormatTextdirectionRToLIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextdirectionRToLIcon ${className}`;
      return (
        <Icon alt="FormatTextdirectionRToL" className={classNames} {...propsRest}>
          <path d="M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10A4,4 0 0,0 6,6A4,4 0 0,0 10,10Z" />

        </Icon>
      );
    };
    FormatTextdirectionRToLIcon.displayName = 'FormatTextdirectionRToLIcon';
      