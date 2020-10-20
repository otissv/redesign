import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TestTubeEmptyIcon: FC<IconInterface> = function TestTubeEmptyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TestTubeEmptyIcon ${className}`;
      return (
        <Icon alt="TestTubeEmpty" className={classNames} {...propsRest}>
          <path d="M7,2H17V4H16V18A4,4 0 0,1 12,22A4,4 0 0,1 8,18V4H7V2M14,4H10V18A2,2 0 0,0 12,20A2,2 0 0,0 14,18V4Z" />

        </Icon>
      );
    };
    TestTubeEmptyIcon.displayName = 'TestTubeEmptyIcon';
      