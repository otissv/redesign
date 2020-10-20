import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DotsHorizontalCircleIcon: FC<IconInterface> = function DotsHorizontalCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DotsHorizontalCircleIcon ${className}`;
      return (
        <Icon alt="DotsHorizontalCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5M6.5,10.5A1.5,1.5 0 0,0 5,12A1.5,1.5 0 0,0 6.5,13.5A1.5,1.5 0 0,0 8,12A1.5,1.5 0 0,0 6.5,10.5M17.5,10.5A1.5,1.5 0 0,0 16,12A1.5,1.5 0 0,0 17.5,13.5A1.5,1.5 0 0,0 19,12A1.5,1.5 0 0,0 17.5,10.5Z" />

        </Icon>
      );
    };
    DotsHorizontalCircleIcon.displayName = 'DotsHorizontalCircleIcon';
      