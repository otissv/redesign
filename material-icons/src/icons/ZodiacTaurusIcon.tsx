import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ZodiacTaurusIcon: FC<IconInterface> = function ZodiacTaurusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZodiacTaurusIcon ${className}`;
      return (
        <Icon alt="ZodiacTaurus" className={classNames} {...propsRest}>
          <path d="M15.59,9C17.7,7.74 19,5.46 19,3H17A5,5 0 0,1 12,8A5,5 0 0,1 7,3H5C5,5.46 6.3,7.74 8.41,9C5.09,11 4,15.28 6,18.6C7.97,21.92 12.27,23 15.59,21C18.91,19.04 20,14.74 18,11.42C17.42,10.43 16.58,9.59 15.59,9M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20Z" />

        </Icon>
      );
    };
    ZodiacTaurusIcon.displayName = 'ZodiacTaurusIcon';
      