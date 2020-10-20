import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatQuoteCloseIcon: FC<IconInterface> = function FormatQuoteCloseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatQuoteCloseIcon ${className}`;
      return (
        <Icon alt="FormatQuoteClose" className={classNames} {...propsRest}>
          <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />

        </Icon>
      );
    };
    FormatQuoteCloseIcon.displayName = 'FormatQuoteCloseIcon';
      