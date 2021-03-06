import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SilverwareForkKnifeIcon: FC<IconInterface> = function SilverwareForkKnifeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SilverwareForkKnifeIcon ${className}`;
      return (
        <Icon alt="SilverwareForkKnife" className={classNames} {...propsRest}>
          <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" />

        </Icon>
      );
    };
    SilverwareForkKnifeIcon.displayName = 'SilverwareForkKnifeIcon';
      