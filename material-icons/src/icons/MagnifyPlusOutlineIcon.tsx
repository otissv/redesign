import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MagnifyPlusOutlineIcon: FC<IconInterface> = function MagnifyPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MagnifyPlusOutlineIcon ${className}`;
      return (
        <Icon alt="MagnifyPlusOutline" className={classNames} {...propsRest}>
          <path d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z" />

        </Icon>
      );
    };
    MagnifyPlusOutlineIcon.displayName = 'MagnifyPlusOutlineIcon';
      