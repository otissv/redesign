import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FoodCroissantIcon: FC<IconInterface> = function FoodCroissantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FoodCroissantIcon ${className}`;
      return (
        <Icon alt="FoodCroissant" className={classNames} {...propsRest}>
          <path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" />

        </Icon>
      );
    };
    FoodCroissantIcon.displayName = 'FoodCroissantIcon';
      