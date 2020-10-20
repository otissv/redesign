import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SimIcon: FC<IconInterface> = function SimIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SimIcon ${className}`;
      return (
        <Icon alt="Sim" className={classNames} {...propsRest}>
          <path d="M20,4A2,2 0 0,0 18,2H10L4,8V20A2,2 0 0,0 6,22H18C19.11,22 20,21.1 20,20V4M9,19H7V17H9V19M17,19H15V17H17V19M9,15H7V11H9V15M13,19H11V15H13V19M13,13H11V11H13V13M17,15H15V11H17V15Z" />

        </Icon>
      );
    };
    SimIcon.displayName = 'SimIcon';
      