import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const XamarinIcon: FC<IconInterface> = function XamarinIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `XamarinIcon ${className}`;
      return (
        <Icon alt="Xamarin" className={classNames} {...propsRest}>
          <path d="M22.75,11.07C22.91,11.35 23,11.67 23,12C23,12.33 22.91,12.65 22.75,12.93L18.08,21C17.72,21.62 17.06,22 16.35,22H7.65C6.94,22 6.28,21.62 5.92,21L1.25,12.93C1.09,12.65 1,12.33 1,12C1,11.67 1.09,11.35 1.25,11.07L5.92,3C6.28,2.38 6.94,2 7.65,2H16.35C17.06,2 17.72,2.38 18.08,3L22.75,11.07M12,12V11.9L9.42,7.1L9.25,7H7.66L7.5,7.1V7.3L10,12L7.5,16.7V16.9L7.66,17H9.25L9.42,16.9L12,12.1V12L12.03,12.1L14.58,16.9L14.75,17H16.34L16.5,16.9V16.7L14,12L16.5,7.3V7.1L16.34,7H14.75L14.58,7.1L12.03,11.9L12,12Z" />

        </Icon>
      );
    };
    XamarinIcon.displayName = 'XamarinIcon';
      