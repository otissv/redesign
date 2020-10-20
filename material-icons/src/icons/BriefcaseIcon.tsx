import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BriefcaseIcon: FC<IconInterface> = function BriefcaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BriefcaseIcon ${className}`;
      return (
        <Icon alt="Briefcase" className={classNames} {...propsRest}>
          <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />

        </Icon>
      );
    };
    BriefcaseIcon.displayName = 'BriefcaseIcon';
      