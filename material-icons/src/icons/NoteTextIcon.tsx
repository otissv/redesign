import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NoteTextIcon: FC<IconInterface> = function NoteTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NoteTextIcon ${className}`;
      return (
        <Icon alt="NoteText" className={classNames} {...propsRest}>
          <path d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,12V14H19V12H5M5,16V18H14V16H5Z" />

        </Icon>
      );
    };
    NoteTextIcon.displayName = 'NoteTextIcon';
      