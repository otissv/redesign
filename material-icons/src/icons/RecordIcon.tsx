import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RecordIcon: FC<IconInterface> = function RecordIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RecordIcon ${className}`;
      return (
        <Icon alt="Record" className={classNames} {...propsRest}>
          <path d="M19,12C19,15.86 15.86,19 12,19C8.14,19 5,15.86 5,12C5,8.14 8.14,5 12,5C15.86,5 19,8.14 19,12Z" />

        </Icon>
      );
    };
    RecordIcon.displayName = 'RecordIcon';
      