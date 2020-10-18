import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ResistorIcon: FC<IconInterface> = function ResistorIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ResistorIcon ${className}`;
      return (
        <Icon alt="Resistor" className={classNames} {...propsRest}>
          <path d="M2,11H7L10.07,15.35L13.11,4L18,11H22V13H17L13.93,8.65L10.89,20L6,13H2V11Z" />

        </Icon>
      );
    };
    ResistorIcon.displayName = 'ResistorIcon';
      