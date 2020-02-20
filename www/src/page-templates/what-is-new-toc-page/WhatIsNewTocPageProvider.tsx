import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import WhatIsNewTocPage from "./WhatIsNewTocPage";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { MobxWhatIsNewTocContext } from "../../mobx/MobxWhatIsNewTocProvider";
import { IWhatIsNewToc } from "../../types/IWhatIsNewToc";
import { TreeNode } from "../../stores/WhatIsNewTocTreeStore";
import { createBookTocPageStores, UseBookTocStores } from "../../stores/book-toc-stores";
import { useLocalStore } from "mobx-react-lite";
import { createWhatIsNewTocMobxEntry, UseWhatIsNewTocStores } from "../../stores/mobx-entry__what-is-new_toc";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";


interface IWhatIsNewTocPageProviderProps {
  pageContext: {
    locale: Locales;
    localization: AppLocalization;
    winTocTree: TreeNode<IWhatIsNewToc>[]
  },
  location: Location;
}

const WhatIsNewTocPageProvider: FC<IWhatIsNewTocPageProviderProps> = ( { pageContext,location } ) => {
  let {localization,winTocTree} = pageContext;
  let winTocStoresRef = useRef<UseWhatIsNewTocStores>( createWhatIsNewTocMobxEntry( {
    winTocTree,
    location
  } ) );

  return (
    <MobxWhatIsNewTocContext.Provider value={ winTocStoresRef.current }>
      <BehaviorNotificationContext.Provider value={ winTocStoresRef.current.behaviorNotificationStore }>
        <Localization.Provider value={ localization }>
          <BaseLayout>
            <SEO/>
            <WhatIsNewTocPage/>
          </BaseLayout>
        </Localization.Provider>
      </BehaviorNotificationContext.Provider>
    </MobxWhatIsNewTocContext.Provider>
  );
};

export default WhatIsNewTocPageProvider