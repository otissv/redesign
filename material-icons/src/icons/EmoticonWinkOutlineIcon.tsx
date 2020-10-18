import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EmoticonWinkOutlineIcon: FC<IconInterface> = function EmoticonWinkOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmoticonWinkOutlineIcon ${className}`;
      return (
        <Icon alt="EmoticonWinkOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M17,10H13V9H17V10Z" />

        </Icon>
      );
    };
    EmoticonWinkOutlineIcon.displayName = 'EmoticonWinkOutlineIcon';
      