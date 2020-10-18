import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ReplyOutlineIcon: FC<IconInterface> = function ReplyOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplyOutlineIcon ${className}`;
      return (
        <Icon alt="ReplyOutline" className={classNames} {...propsRest}>
          <path d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />

        </Icon>
      );
    };
    ReplyOutlineIcon.displayName = 'ReplyOutlineIcon';
      