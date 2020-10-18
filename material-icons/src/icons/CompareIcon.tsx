import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CompareIcon: FC<IconInterface> = function CompareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompareIcon ${className}`;
      return (
        <Icon alt="Compare" className={classNames} {...propsRest}>
          <path d="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z" />

        </Icon>
      );
    };
    CompareIcon.displayName = 'CompareIcon';
      