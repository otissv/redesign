import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LanguageFortranIcon: FC<IconInterface> = function LanguageFortranIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LanguageFortranIcon ${className}`;
      return (
        <Icon alt="LanguageFortran" className={classNames} {...propsRest}>
          <path d="M5 4V6H6C6.55 6 7 6.45 7 7V17C7 17.55 6.55 18 6 18H5V20H14V18H12C11.45 18 11 17.55 11 17V13H13C13.55 13 14 13.45 14 14V16H16V8H14V10C14 10.55 13.55 11 13 11H11V6H16C17.11 6 18 7.34 18 9V10H20V4Z" />

        </Icon>
      );
    };
    LanguageFortranIcon.displayName = 'LanguageFortranIcon';
      