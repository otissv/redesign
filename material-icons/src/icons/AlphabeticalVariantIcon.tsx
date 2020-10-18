import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphabeticalVariantIcon: FC<IconInterface> = function AlphabeticalVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphabeticalVariantIcon ${className}`;
      return (
        <Icon alt="AlphabeticalVariant" className={classNames} {...propsRest}>
          <path d="M3 7A2 2 0 0 0 1 9V17H3V13H5V17H7V9A2 2 0 0 0 5 7H3M3 9H5V11H3M15 10.5V9A2 2 0 0 0 13 7H9V17H13A2 2 0 0 0 15 15V13.5A1.54 1.54 0 0 0 13.5 12A1.54 1.54 0 0 0 15 10.5M13 15H11V13H13V15M13 11H11V9H13M19 7A2 2 0 0 0 17 9V15A2 2 0 0 0 19 17H21A2 2 0 0 0 23 15V14H21V15H19V9H21V10H23V9A2 2 0 0 0 21 7Z" />

        </Icon>
      );
    };
    AlphabeticalVariantIcon.displayName = 'AlphabeticalVariantIcon';
      