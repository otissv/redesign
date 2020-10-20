import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BandcampIcon: FC<IconInterface> = function BandcampIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BandcampIcon ${className}`;
      return (
        <Icon alt="Bandcamp" className={classNames} {...propsRest}>
          <path d="M22,6L15.5,18H2L8.5,6H22Z" />

        </Icon>
      );
    };
    BandcampIcon.displayName = 'BandcampIcon';
      