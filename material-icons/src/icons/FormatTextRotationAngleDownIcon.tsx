import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatTextRotationAngleDownIcon: FC<IconInterface> = function FormatTextRotationAngleDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextRotationAngleDownIcon ${className}`;
      return (
        <Icon alt="FormatTextRotationAngleDown" className={classNames} {...propsRest}>
          <path d="M14.25 21H10.03L11.44 19.59L2.58 10.73L4.03 9.33L12.84 18.19L14.25 16.78M12.61 8L15.23 10.64L17.43 5.77M19.41 4.92L14.95 16.03L13.5 14.58L14.39 12.38L10.88 8.81L8.68 9.75L7.22 8.25L18.33 3.84Z" />

        </Icon>
      );
    };
    FormatTextRotationAngleDownIcon.displayName = 'FormatTextRotationAngleDownIcon';
      