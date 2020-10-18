import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SlashForwardBoxIcon: FC<IconInterface> = function SlashForwardBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SlashForwardBoxIcon ${className}`;
      return (
        <Icon alt="SlashForwardBox" className={classNames} {...propsRest}>
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.3 19H7L14.7 5H17L9.3 19Z" />

        </Icon>
      );
    };
    SlashForwardBoxIcon.displayName = 'SlashForwardBoxIcon';
      