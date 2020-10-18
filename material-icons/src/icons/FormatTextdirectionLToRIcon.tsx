import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatTextdirectionLToRIcon: FC<IconInterface> = function FormatTextdirectionLToRIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextdirectionLToRIcon ${className}`;
      return (
        <Icon alt="FormatTextdirectionLToR" className={classNames} {...propsRest}>
          <path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z" />

        </Icon>
      );
    };
    FormatTextdirectionLToRIcon.displayName = 'FormatTextdirectionLToRIcon';
      