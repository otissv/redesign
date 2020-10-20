import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlagIcon: FC<IconInterface> = function FlagIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagIcon ${className}`;
      return (
        <Icon alt="Flag" className={classNames} {...propsRest}>
          <path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />

        </Icon>
      );
    };
    FlagIcon.displayName = 'FlagIcon';
      