import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PianoIcon: FC<IconInterface> = function PianoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PianoIcon ${className}`;
      return (
        <Icon alt="Piano" className={classNames} {...propsRest}>
          <path d="M4,3H20A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M4,5V19H8V13H6.75V5H4M9,19H15V13H13.75V5H10.25V13H9V19M16,19H20V5H17.25V13H16V19Z" />

        </Icon>
      );
    };
    PianoIcon.displayName = 'PianoIcon';
      