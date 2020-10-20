import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowLeftBoldIcon: FC<IconInterface> = function ArrowLeftBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftBoldIcon ${className}`;
      return (
        <Icon alt="ArrowLeftBold" className={classNames} {...propsRest}>
          <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" />

        </Icon>
      );
    };
    ArrowLeftBoldIcon.displayName = 'ArrowLeftBoldIcon';
      