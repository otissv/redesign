import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ReplayIcon: FC<IconInterface> = function ReplayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplayIcon ${className}`;
      return (
        <Icon alt="Replay" className={classNames} {...propsRest}>
          <path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" />

        </Icon>
      );
    };
    ReplayIcon.displayName = 'ReplayIcon';
      