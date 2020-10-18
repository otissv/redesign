import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowTopRightThickIcon: FC<IconInterface> = function ArrowTopRightThickIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopRightThickIcon ${className}`;
      return (
        <Icon alt="ArrowTopRightThick" className={classNames} {...propsRest}>
          <path d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" />

        </Icon>
      );
    };
    ArrowTopRightThickIcon.displayName = 'ArrowTopRightThickIcon';
      