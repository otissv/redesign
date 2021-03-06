import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlusCircleIcon: FC<IconInterface> = function PlusCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusCircleIcon ${className}`;
      return (
        <Icon alt="PlusCircle" className={classNames} {...propsRest}>
          <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    PlusCircleIcon.displayName = 'PlusCircleIcon';
      