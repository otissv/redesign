import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronTripleDownIcon: FC<IconInterface> = function ChevronTripleDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronTripleDownIcon ${className}`;
      return (
        <Icon alt="ChevronTripleDown" className={classNames} {...propsRest}>
          <path d="M7.41,14.58L12,19.17L16.59,14.58L18,16L12,22L6,16L7.41,14.58M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58M7.41,2.58L12,7.17L16.59,2.58L18,4L12,10L6,4L7.41,2.58Z" />

        </Icon>
      );
    };
    ChevronTripleDownIcon.displayName = 'ChevronTripleDownIcon';
      