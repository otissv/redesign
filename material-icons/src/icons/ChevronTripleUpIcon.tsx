import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronTripleUpIcon: FC<IconInterface> = function ChevronTripleUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronTripleUpIcon ${className}`;
      return (
        <Icon alt="ChevronTripleUp" className={classNames} {...propsRest}>
          <path d="M16.59,9.42L12,4.83L7.41,9.42L6,8L12,2L18,8L16.59,9.42M16.59,15.42L12,10.83L7.41,15.42L6,14L12,8L18,14L16.59,15.42M16.59,21.42L12,16.83L7.41,21.42L6,20L12,14L18,20L16.59,21.42Z" />

        </Icon>
      );
    };
    ChevronTripleUpIcon.displayName = 'ChevronTripleUpIcon';
      