import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ZodiacSagittariusIcon: FC<IconInterface> = function ZodiacSagittariusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZodiacSagittariusIcon ${className}`;
      return (
        <Icon alt="ZodiacSagittarius" className={classNames} {...propsRest}>
          <path d="M22,2V12H20V5.41L10.41,15L12.71,17.29L11.29,18.71L9,16.41L3.71,21.71L2.29,20.29L7.59,15L5.29,12.71L6.71,11.29L9,13.59L18.59,4H12V2H22Z" />

        </Icon>
      );
    };
    ZodiacSagittariusIcon.displayName = 'ZodiacSagittariusIcon';
      