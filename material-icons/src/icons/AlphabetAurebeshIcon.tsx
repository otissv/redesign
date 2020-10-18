import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphabetAurebeshIcon: FC<IconInterface> = function AlphabetAurebeshIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphabetAurebeshIcon ${className}`;
      return (
        <Icon alt="AlphabetAurebesh" className={classNames} {...propsRest}>
          <path d="M3 4V11H14.23L22 4H19L13.46 9H5V4H3M3 13V20H5V15H13.46L19 20H22L14.23 13H3Z" />

        </Icon>
      );
    };
    AlphabetAurebeshIcon.displayName = 'AlphabetAurebeshIcon';
      