import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LanguageHtml5Icon: FC<IconInterface> = function LanguageHtml5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `LanguageHtml5Icon ${className}`;
      return (
        <Icon alt="LanguageHtml5" className={classNames} {...propsRest}>
          <path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />

        </Icon>
      );
    };
    LanguageHtml5Icon.displayName = 'LanguageHtml5Icon';
      