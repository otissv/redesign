import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ReplyIcon: FC<IconInterface> = function ReplyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplyIcon ${className}`;
      return (
        <Icon alt="Reply" className={classNames} {...propsRest}>
          <path d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" />

        </Icon>
      );
    };
    ReplyIcon.displayName = 'ReplyIcon';
      