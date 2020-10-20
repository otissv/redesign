import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DotsVerticalIcon: FC<IconInterface> = function DotsVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DotsVerticalIcon ${className}`;
      return (
        <Icon alt="DotsVertical" className={classNames} {...propsRest}>
          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />

        </Icon>
      );
    };
    DotsVerticalIcon.displayName = 'DotsVerticalIcon';
      