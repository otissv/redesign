import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Numeric9PlusCircleOutlineIcon: FC<IconInterface> = function Numeric9PlusCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric9PlusCircleOutlineIcon ${className}`;
      return (
        <Icon alt="Numeric9PlusCircleOutline" className={classNames} {...propsRest}>
          <path d="M19,11V13H17V15H15V13H13V11H15V9H17V11H19M10,7A2,2 0 0,1 12,9V15C12,16.11 11.1,17 10,17H6V15H10V13H8A2,2 0 0,1 6,11V9C6,7.89 6.9,7 8,7H10M8,9V11H10V9H8M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    Numeric9PlusCircleOutlineIcon.displayName = 'Numeric9PlusCircleOutlineIcon';
      