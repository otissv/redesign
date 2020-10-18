import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PatioHeaterIcon: FC<IconInterface> = function PatioHeaterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PatioHeaterIcon ${className}`;
      return (
        <Icon alt="PatioHeater" className={classNames} {...propsRest}>
          <path d="M15 22H9V21H15V22M19 4L15 2H9L5 4H19M8 5L8.4 6H15.6L16 5H8M10 10H11V15C10.4 15 10 15.4 10 16V20H14V16C14 15.4 13.6 15 13 15V10H14L14.4 9H9.6L10 10M9.2 8H14.8L15.2 7H8.8L9.2 8Z" />

        </Icon>
      );
    };
    PatioHeaterIcon.displayName = 'PatioHeaterIcon';
      