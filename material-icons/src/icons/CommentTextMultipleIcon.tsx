import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CommentTextMultipleIcon: FC<IconInterface> = function CommentTextMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentTextMultipleIcon ${className}`;
      return (
        <Icon alt="CommentTextMultiple" className={classNames} {...propsRest}>
          <path d="M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M9,9V11H19V9H9M9,13V15H17V13H9Z" />

        </Icon>
      );
    };
    CommentTextMultipleIcon.displayName = 'CommentTextMultipleIcon';
      