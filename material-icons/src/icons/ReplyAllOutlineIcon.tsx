import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ReplyAllOutlineIcon: FC<IconInterface> = function ReplyAllOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplyAllOutlineIcon ${className}`;
      return (
        <Icon alt="ReplyAllOutline" className={classNames} {...propsRest}>
          <path d="M11,9.8V10.7L12.7,10.9C15.3,11.3 17.2,12.3 18.6,13.6C16.9,13.1 15.1,12.8 13,12.8H11V14.1L8.8,12L11,9.8M13,5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12" />

        </Icon>
      );
    };
    ReplyAllOutlineIcon.displayName = 'ReplyAllOutlineIcon';
      