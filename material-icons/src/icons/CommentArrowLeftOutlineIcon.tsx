import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CommentArrowLeftOutlineIcon: FC<IconInterface> = function CommentArrowLeftOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentArrowLeftOutlineIcon ${className}`;
      return (
        <Icon alt="CommentArrowLeftOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H13.1L10 19.1V16H4V4H20V16M16 11V9H11.5L13.3 7.2L12 6L8 10L12 14L13.2 12.8L11.5 11H16Z" />

        </Icon>
      );
    };
    CommentArrowLeftOutlineIcon.displayName = 'CommentArrowLeftOutlineIcon';
      