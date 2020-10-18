import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkewLessIcon: FC<IconInterface> = function SkewLessIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkewLessIcon ${className}`;
      return (
        <Icon alt="SkewLess" className={classNames} {...propsRest}>
          <path d="M17.5,11L15.41,20H10.5L12.59,11H17.5M20,9H11L8,22H17L20,9M4,6L8,2V5H16V7H8V10L4,6Z" />

        </Icon>
      );
    };
    SkewLessIcon.displayName = 'SkewLessIcon';
      