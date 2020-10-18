import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HomeVariantIcon: FC<IconInterface> = function HomeVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeVariantIcon ${className}`;
      return (
        <Icon alt="HomeVariant" className={classNames} {...propsRest}>
          <path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />

        </Icon>
      );
    };
    HomeVariantIcon.displayName = 'HomeVariantIcon';
      