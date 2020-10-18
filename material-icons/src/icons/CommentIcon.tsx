import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CommentIcon: FC<IconInterface> = function CommentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentIcon ${className}`;
      return (
        <Icon alt="Comment" className={classNames} {...propsRest}>
          <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />

        </Icon>
      );
    };
    CommentIcon.displayName = 'CommentIcon';
      