import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MusicClefAltoIcon: FC<IconInterface> = function MusicClefAltoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicClefAltoIcon ${className}`;
      return (
        <Icon alt="MusicClefAlto" className={classNames} {...propsRest}>
          <path d="M5 4H7V20H5M15.46 13H14.83L13.83 12L14.83 11H15.46A3.5 3.5 0 1 0 11.96 7.5H13.96A1.5 1.5 0 1 1 15.46 9H14L12 11H11V4H9V20H11V13H12L14 15H15.46A1.5 1.5 0 1 1 13.96 16.5H11.96A3.5 3.5 0 1 0 15.46 13Z" />

        </Icon>
      );
    };
    MusicClefAltoIcon.displayName = 'MusicClefAltoIcon';
      