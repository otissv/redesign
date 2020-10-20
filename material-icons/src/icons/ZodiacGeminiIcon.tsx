import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ZodiacGeminiIcon: FC<IconInterface> = function ZodiacGeminiIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZodiacGeminiIcon ${className}`;
      return (
        <Icon alt="ZodiacGemini" className={classNames} {...propsRest}>
          <path d="M18,5.3C19.35,4.97 20.66,4.54 21.94,4L21.18,2.14C18.27,3.36 15.15,4 12,4C8.85,4 5.73,3.38 2.82,2.17L2.06,4C3.34,4.54 4.65,4.97 6,5.3V18.7C4.65,19.03 3.34,19.46 2.06,20L2.82,21.86C8.7,19.42 15.3,19.42 21.18,21.86L21.94,20C20.66,19.46 19.35,19.03 18,18.7V5.3M8,18.3V5.69C9.32,5.89 10.66,6 12,6C13.34,6 14.68,5.89 16,5.69V18.31C13.35,17.9 10.65,17.9 8,18.31V18.3Z" />

        </Icon>
      );
    };
    ZodiacGeminiIcon.displayName = 'ZodiacGeminiIcon';
      