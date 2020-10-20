import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NewspaperVariantMultipleIcon: FC<IconInterface> = function NewspaperVariantMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NewspaperVariantMultipleIcon ${className}`;
      return (
        <Icon alt="NewspaperVariantMultiple" className={classNames} {...propsRest}>
          <path d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4M21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3M8 5H13V11H8V5M21 15H8V13H21V15M21 11H15V9H21V11M21 7H15V5H21V7Z" />

        </Icon>
      );
    };
    NewspaperVariantMultipleIcon.displayName = 'NewspaperVariantMultipleIcon';
      