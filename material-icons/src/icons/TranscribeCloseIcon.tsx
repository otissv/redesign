import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TranscribeCloseIcon: FC<IconInterface> = function TranscribeCloseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TranscribeCloseIcon ${className}`;
      return (
        <Icon alt="TranscribeClose" className={classNames} {...propsRest}>
          <path d="M12,23L8,19H16L12,23M20,3A2,2 0 0,1 22,5V15A2,2 0 0,1 20,17H4A2,2 0 0,1 2,15V5A2,2 0 0,1 4,3H20M18,15V13H12.5L10.5,15H18M6,15H8.5L15.35,8.12C15.55,7.93 15.55,7.61 15.35,7.42L13.59,5.65C13.39,5.45 13.07,5.45 12.88,5.65L6,12.53V15Z" />

        </Icon>
      );
    };
    TranscribeCloseIcon.displayName = 'TranscribeCloseIcon';
      