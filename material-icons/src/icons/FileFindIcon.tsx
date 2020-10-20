import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FileFindIcon: FC<IconInterface> = function FileFindIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileFindIcon ${className}`;
      return (
        <Icon alt="FileFind" className={classNames} {...propsRest}>
          <path d="M9,13A3,3 0 0,0 12,16A3,3 0 0,0 15,13A3,3 0 0,0 12,10A3,3 0 0,0 9,13M20,19.59V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18C18.45,22 18.85,21.85 19.19,21.6L14.76,17.17C13.96,17.69 13,18 12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13C17,14 16.69,14.96 16.17,15.75L20,19.59Z" />

        </Icon>
      );
    };
    FileFindIcon.displayName = 'FileFindIcon';
      