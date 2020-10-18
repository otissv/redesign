import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrangeSendBackwardIcon: FC<IconInterface> = function ArrangeSendBackwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrangeSendBackwardIcon ${className}`;
      return (
        <Icon alt="ArrangeSendBackward" className={classNames} {...propsRest}>
          <path d="M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z" />

        </Icon>
      );
    };
    ArrangeSendBackwardIcon.displayName = 'ArrangeSendBackwardIcon';
      