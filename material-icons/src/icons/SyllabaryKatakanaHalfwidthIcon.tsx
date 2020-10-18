import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SyllabaryKatakanaHalfwidthIcon: FC<IconInterface> = function SyllabaryKatakanaHalfwidthIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SyllabaryKatakanaHalfwidthIcon ${className}`;
      return (
        <Icon alt="SyllabaryKatakanaHalfwidth" className={classNames} {...propsRest}>
          <path d="M8 4V6H14L13 10.81L15 11.2L16 6.1V4M10 9V12C10 14.86 9.34 17.29 8.08 18.61L9.5 20C11.35 18.08 12 15.15 12 12V9Z" />

        </Icon>
      );
    };
    SyllabaryKatakanaHalfwidthIcon.displayName = 'SyllabaryKatakanaHalfwidthIcon';
      