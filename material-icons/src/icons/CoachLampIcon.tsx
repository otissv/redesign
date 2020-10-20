import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CoachLampIcon: FC<IconInterface> = function CoachLampIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CoachLampIcon ${className}`;
      return (
        <Icon alt="CoachLamp" className={classNames} {...propsRest}>
          <path d="M16 5L15 2H13L12 5L6 8H8L8.6 11H4V7H2V17H4V13H9L10 18L12 20L13 22H15L16 20L18 18L20 8H22M16.16 17H11.84L10 8H18Z" />

        </Icon>
      );
    };
    CoachLampIcon.displayName = 'CoachLampIcon';
      