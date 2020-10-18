import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MapMarkerRemoveVariantIcon: FC<IconInterface> = function MapMarkerRemoveVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MapMarkerRemoveVariantIcon ${className}`;
      return (
        <Icon alt="MapMarkerRemoveVariant" className={classNames} {...propsRest}>
          <path d="M12,2C8.14,2 5,5.14 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.14 15.86,2 12,2M9.59,5.17L12,7.58L14.41,5.17L15.83,6.58L13.41,9L15.83,11.41L14.41,12.83L12,10.41L9.59,12.83L8.17,11.41L10.59,9L8.17,6.58" />

        </Icon>
      );
    };
    MapMarkerRemoveVariantIcon.displayName = 'MapMarkerRemoveVariantIcon';
      