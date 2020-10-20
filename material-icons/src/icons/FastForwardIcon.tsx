import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FastForwardIcon: FC<IconInterface> = function FastForwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FastForwardIcon ${className}`;
      return (
        <Icon alt="FastForward" className={classNames} {...propsRest}>
          <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" />

        </Icon>
      );
    };
    FastForwardIcon.displayName = 'FastForwardIcon';
      