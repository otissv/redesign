import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PageNextIcon: FC<IconInterface> = function PageNextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PageNextIcon ${className}`;
      return (
        <Icon alt="PageNext" className={classNames} {...propsRest}>
          <path d="M20,3H5A2,2 0 0,0 3,5V11H7V9L11,12L7,15V13H3V19A2,2 0 0,0 5,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z" />

        </Icon>
      );
    };
    PageNextIcon.displayName = 'PageNextIcon';
      