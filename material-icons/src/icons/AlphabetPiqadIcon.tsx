import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphabetPiqadIcon: FC<IconInterface> = function AlphabetPiqadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphabetPiqadIcon ${className}`;
      return (
        <Icon alt="AlphabetPiqad" className={classNames} {...propsRest}>
          <path d="M13.04 4L6.54 17.85C6.21 18.55 5.5 19 4.73 19H4V20H16C17.2 20 18.27 20.54 19 21.39H20C19.05 19.32 17 18 14.7 18H12C11.29 18 10.62 17.63 10.24 17.03C9.85 16.43 9.8 15.68 10.1 15.03L10.58 14H19V13H17.5C15.29 13 13.5 11.21 13.5 9C13.5 6.79 15.29 5 17.5 5H20V4Z" />

        </Icon>
      );
    };
    AlphabetPiqadIcon.displayName = 'AlphabetPiqadIcon';
      