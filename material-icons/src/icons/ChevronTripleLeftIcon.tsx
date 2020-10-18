import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ChevronTripleLeftIcon: FC<IconInterface> = function ChevronTripleLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronTripleLeftIcon ${className}`;
      return (
        <Icon alt="ChevronTripleLeft" className={classNames} {...propsRest}>
          <path d="M9.42,7.41L4.83,12L9.42,16.59L8,18L2,12L8,6L9.42,7.41M15.42,7.41L10.83,12L15.42,16.59L14,18L8,12L14,6L15.42,7.41M21.42,7.41L16.83,12L21.42,16.59L20,18L14,12L20,6L21.42,7.41Z" />

        </Icon>
      );
    };
    ChevronTripleLeftIcon.displayName = 'ChevronTripleLeftIcon';
      