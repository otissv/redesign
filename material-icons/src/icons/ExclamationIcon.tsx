import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ExclamationIcon: FC<IconInterface> = function ExclamationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExclamationIcon ${className}`;
      return (
        <Icon alt="Exclamation" className={classNames} {...propsRest}>
          <path d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" />

        </Icon>
      );
    };
    ExclamationIcon.displayName = 'ExclamationIcon';
      