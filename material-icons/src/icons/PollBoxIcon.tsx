import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PollBoxIcon: FC<IconInterface> = function PollBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PollBoxIcon ${className}`;
      return (
        <Icon alt="PollBox" className={classNames} {...propsRest}>
          <path d="M17,17H15V13H17M13,17H11V7H13M9,17H7V10H9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    PollBoxIcon.displayName = 'PollBoxIcon';
      