import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronUpIcon: FC<IconInterface> = function ChevronUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronUpIcon ${className}`;
      return (
        <Icon alt="ChevronUp" className={classNames} {...propsRest}>
          <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />

        </Icon>
      );
    };
    ChevronUpIcon.displayName = 'ChevronUpIcon';
      