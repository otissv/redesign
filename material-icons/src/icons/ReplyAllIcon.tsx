import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ReplyAllIcon: FC<IconInterface> = function ReplyAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplyAllIcon ${className}`;
      return (
        <Icon alt="ReplyAll" className={classNames} {...propsRest}>
          <path d="M13,9V5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12L7,8Z" />

        </Icon>
      );
    };
    ReplyAllIcon.displayName = 'ReplyAllIcon';
      