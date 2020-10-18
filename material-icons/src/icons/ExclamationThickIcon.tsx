import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ExclamationThickIcon: FC<IconInterface> = function ExclamationThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExclamationThickIcon ${className}`;
      return (
        <Icon alt="ExclamationThick" className={classNames} {...propsRest}>
          <path d="M10 3H14V14H10V3M10 21V17H14V21H10Z" />

        </Icon>
      );
    };
    ExclamationThickIcon.displayName = 'ExclamationThickIcon';
      