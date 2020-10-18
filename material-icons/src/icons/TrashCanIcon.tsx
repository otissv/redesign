import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TrashCanIcon: FC<IconInterface> = function TrashCanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrashCanIcon ${className}`;
      return (
        <Icon alt="TrashCan" className={classNames} {...propsRest}>
          <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />

        </Icon>
      );
    };
    TrashCanIcon.displayName = 'TrashCanIcon';
      