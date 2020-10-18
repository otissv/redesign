import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FileQuestionIcon: FC<IconInterface> = function FileQuestionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileQuestionIcon ${className}`;
      return (
        <Icon alt="FileQuestion" className={classNames} {...propsRest}>
          <path d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5M12,11A3,3 0 0,1 15,14C15,15.88 12.75,16.06 12.75,17.75H11.25C11.25,15.31 13.5,15.5 13.5,14A1.5,1.5 0 0,0 12,12.5A1.5,1.5 0 0,0 10.5,14H9A3,3 0 0,1 12,11M11.25,18.5H12.75V20H11.25V18.5Z" />

        </Icon>
      );
    };
    FileQuestionIcon.displayName = 'FileQuestionIcon';
      