import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CommentQuoteOutlineIcon: FC<IconInterface> = function CommentQuoteOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommentQuoteOutlineIcon ${className}`;
      return (
        <Icon alt="CommentQuoteOutline" className={classNames} {...propsRest}>
          <path d="M9 22C8.4 22 8 21.6 8 21V18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H13.9L10.2 21.7C10 21.9 9.8 22 9.5 22H9M10 16V19.1L13.1 16H20V4H4V16H10M16.3 6L14.9 9H17V13H13V8.8L14.3 6H16.3M10.3 6L8.9 9H11V13H7V8.8L8.3 6H10.3Z" />

        </Icon>
      );
    };
    CommentQuoteOutlineIcon.displayName = 'CommentQuoteOutlineIcon';
      