import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlertCircleIcon: FC<IconInterface> = function AlertCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertCircleIcon ${className}`;
      return (
        <Icon alt="AlertCircle" className={classNames} {...propsRest}>
          <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    AlertCircleIcon.displayName = 'AlertCircleIcon';
      