import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LibraryShelvesIcon: FC<IconInterface> = function LibraryShelvesIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LibraryShelvesIcon ${className}`;
      return (
        <Icon alt="LibraryShelves" className={classNames} {...propsRest}>
          <path d="M19.5,9V1.5H16.5V9H13.5V1.5H10.5V9H7.5V1.5H4.65V9H3V10.5H21V9H19.5M19.5,13.5H16.5V21H13.5V13.5H10.5V21H7.5V13.5H4.65V21H3V22.5H21V21H19.5V13.5Z" />

        </Icon>
      );
    };
    LibraryShelvesIcon.displayName = 'LibraryShelvesIcon';
      