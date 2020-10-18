import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PriorityHighIcon: FC<IconInterface> = function PriorityHighIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PriorityHighIcon ${className}`;
      return (
        <Icon alt="PriorityHigh" className={classNames} {...propsRest}>
          <path d="M14,19H22V17H14V19M14,13.5H22V11.5H14V13.5M14,8H22V6H14V8M2,12.5C2,8.92 4.92,6 8.5,6H9V4L12,7L9,10V8H8.5C6,8 4,10 4,12.5C4,15 6,17 8.5,17H12V19H8.5C4.92,19 2,16.08 2,12.5Z" />

        </Icon>
      );
    };
    PriorityHighIcon.displayName = 'PriorityHighIcon';
      