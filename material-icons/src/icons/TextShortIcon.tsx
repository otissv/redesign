import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TextShortIcon: FC<IconInterface> = function TextShortIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TextShortIcon ${className}`;
      return (
        <Icon alt="TextShort" className={classNames} {...propsRest}>
          <path d="M4,9H20V11H4V9M4,13H14V15H4V13Z" />

        </Icon>
      );
    };
    TextShortIcon.displayName = 'TextShortIcon';
      