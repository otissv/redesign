import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowTopLeftBoldOutlineIcon: FC<IconInterface> = function ArrowTopLeftBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopLeftBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowTopLeftBoldOutline" className={classNames} {...propsRest}>
          <path d="M14.12,8.46L19.78,14.12L14.12,19.78L8.46,14.12L4.22,18.36V4.22H18.36L14.12,8.46M6.34,13.41L8.46,11.29L14.12,16.95L16.95,14.12L11.29,8.47L13.41,6.34H6.34V13.41Z" />

        </Icon>
      );
    };
    ArrowTopLeftBoldOutlineIcon.displayName = 'ArrowTopLeftBoldOutlineIcon';
      