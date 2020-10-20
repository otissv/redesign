import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BookOpenIcon: FC<IconInterface> = function BookOpenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BookOpenIcon ${className}`;
      return (
        <Icon alt="BookOpen" className={classNames} {...propsRest}>
          <path d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21" />

        </Icon>
      );
    };
    BookOpenIcon.displayName = 'BookOpenIcon';
      