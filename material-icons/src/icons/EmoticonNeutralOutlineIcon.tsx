import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmoticonNeutralOutlineIcon: FC<IconInterface> = function EmoticonNeutralOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmoticonNeutralOutlineIcon ${className}`;
      return (
        <Icon alt="EmoticonNeutralOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5M16,14V16H8V14H16Z" />

        </Icon>
      );
    };
    EmoticonNeutralOutlineIcon.displayName = 'EmoticonNeutralOutlineIcon';
      