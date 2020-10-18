import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronTripleRightIcon: FC<IconInterface> = function ChevronTripleRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronTripleRightIcon ${className}`;
      return (
        <Icon alt="ChevronTripleRight" className={classNames} {...propsRest}>
          <path d="M14.58,16.59L19.17,12L14.58,7.41L16,6L22,12L16,18L14.58,16.59M8.58,16.59L13.17,12L8.58,7.41L10,6L16,12L10,18L8.58,16.59M2.58,16.59L7.17,12L2.58,7.41L4,6L10,12L4,18L2.58,16.59Z" />

        </Icon>
      );
    };
    ChevronTripleRightIcon.displayName = 'ChevronTripleRightIcon';
      