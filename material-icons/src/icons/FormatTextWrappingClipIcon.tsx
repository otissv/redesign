import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextWrappingClipIcon: FC<IconInterface> = function FormatTextWrappingClipIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextWrappingClipIcon ${className}`;
      return (
        <Icon alt="FormatTextWrappingClip" className={classNames} {...propsRest}>
          <path d="M7,21H5V3H7V21M17,3V11H9V13H17V21H19V3H17Z" />

        </Icon>
      );
    };
    FormatTextWrappingClipIcon.displayName = 'FormatTextWrappingClipIcon';
      