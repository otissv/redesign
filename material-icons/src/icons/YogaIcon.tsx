import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const YogaIcon: FC<IconInterface> = function YogaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `YogaIcon ${className}`;
      return (
        <Icon alt="Yoga" className={classNames} {...propsRest}>
          <path d="M13 2C11.9 2 11 2.9 11 4C11 5.11 11.9 6 13 6C14.11 6 15 5.11 15 4C15 2.9 14.11 2 13 2M4 7V9H10V15L4.93 20.07L6.34 21.5L13.06 14.77L17 17.13V21H19V16.57C19 16.21 18.82 15.89 18.5 15.71L15 13.6V9H21V7H4Z" />

        </Icon>
      );
    };
    YogaIcon.displayName = 'YogaIcon';
      