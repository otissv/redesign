import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatItalicIcon: FC<IconInterface> = function FormatItalicIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatItalicIcon ${className}`;
      return (
        <Icon alt="FormatItalic" className={classNames} {...propsRest}>
          <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />

        </Icon>
      );
    };
    FormatItalicIcon.displayName = 'FormatItalicIcon';
      